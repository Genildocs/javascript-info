let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(arr));
