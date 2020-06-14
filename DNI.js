var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dniLetra = 'X', dniNumero = 3000;
const numConst = 23;
if(dniNumero<0||dniNumero>99999999){
	alert('El numero indicado por el usuario no es valido');
}else{
	comprobacion = letras[dniNumero%numConst];
	console.log(comprobacion);
	if(comprobacion===dniLetra){
		console.log('El numero '+dniNumero+' y la letra '+dniLetra+' son correctos');
	}else{
		console.log('la letra que ha indicado no es correcta');
	}

}