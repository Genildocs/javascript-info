let user = {
	nome : 'João',
	idade: 25,
	profissao: 'Programador'
}

let json = JSON.stringify(user) //converte o objeto em JSON
console.log(json)
user = JSON.parse(json) //converte o JSON em objeto
console.log(user)