let users = [
	{name: 'Diego', age: 23},
	{name: 'Gabriel', age: 15},
	{name: 'Lucas', age: 30}
]

let ages = users.filter((item)=>{
	return item.age >= 18
})
console.log(ages)