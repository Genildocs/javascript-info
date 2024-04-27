//find melhor para ser usado com arrays contendo objetos
let users = [
	{name: 'Diego', age: 23},
	{name: 'Gabriel', age: 15},
	{name: 'Lucas', age: 30}
]

let user = users.find((item)=>{
	return item.age >= 18 // retorna a primeira ocorrencia que satisfizer a condição, quando existe mais de uma ocorrencia usar filter
})
console.log(user)


//findIndex retorna o indice do elemento
let user2 = users.findIndex((item)=>{
	return item.age >= 18
})

console.log(user2)

