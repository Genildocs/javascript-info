let nomes = ['Genildo', 'Carlos', 'Antonio'];
let set = new Set();
set.add(nomes);
console.log('------');
let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };
set.add(john);
set.add(pete);
set.add(mary);
set.add(mary);

for (let value of set) console.log(value);
set.forEach((value, valueAgain, set) => console.log(value));
console.log('*****************')
console.log('*****************')
console.log('*****************')

let arr = [1,1,2,3,5,6,4,5,10]
let newArr = new Set()

for(let y of arr){
	newArr.add(y)
}
console.log(arr)
console.log(newArr)