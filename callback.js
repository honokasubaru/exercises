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

const getUser =  (id,callback) => {

	const user = users.find(user=>user.id===id);
	
	if(!user) return callback(`Does'nt exists an user with id = ${id}`);
	
	callback(null,user);

}

const getEmail =  (user,callback) => {

	const email = emails.find(email=>user.id===email.id);
	
	if(!email) return callback(`Does'nt exists an email with id = ${user.id}`);
	
	return callback(null,{ user, email: email.email });

}

getUser(1,(err,user) => {

		if(err) return console.log(err);

		getEmail(user,(err,result)=>{
			if(err) return console.log(err);
			return console.log(result);
		});
	}
);