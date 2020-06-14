const users = [

	{
		id: 1,
		name: 'dylan'
	},
	{
		id:2,
		name: 'laura'
	},
	{
		id:3,
		name: 'carol'
	}
];

const emails = [
	
	{
		id:1,
		email: 'dylan@email.com'
	},
	{
		id:2,
		email: 'laura@email.com'
	}
];


const getUser = id => {

	const user = users.find(user=>user.id===id);

	const userPromise = new Promise((resolve,reject)=>{

		if(user) resolve(user);
		else reject(`Does'nt exists an user with id = ${id}`);

	});

	return userPromise;
}

const getEmail = user => {

	const email = emails.find(email=>user.id===email.id);

	const emailPromise = new Promise((resolve,reject)=>{

		if(email)resolve({ user, email: email.email });
			else reject(`Does'nt exists an email with id = ${user.id}`);

	});

	return emailPromise;
}

getUser(1)
	.then(result=>{
		return getEmail(result);
	})	
	.then(result=>{
		console.log(result);
	})
	.catch(err=>{
		console.log(err);
	});