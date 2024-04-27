let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let values = numbers.reduce((acc, item)=>{
	return acc + item
}, 0)

console.log(values)