//indexOf
let animais = ['cachorro', 'gato', 'elefante', 'arara', 'hipopótamo'];
if(animais.indexOf('hipopótamo') !== -1) {
	console.log('Existe no array');
}else {
	console.log('NÃO existe no array');
}

//lastIndexOf
if(animais.lastIndexOf('hipopótamo') !== -1) {
	console.log('Existe no array');
}


//Includes
if(animais.includes('elefante')){
	console.log('Existe no array');
}else{
	console.log('NÃO existe no array');
}