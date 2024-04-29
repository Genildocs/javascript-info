//Seja arruma matriz.
// Crie uma função unique(arr)que retorne um array com itens exclusivos de arr.

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

function unique(arr) {
  let set = new Set(arr);
  return set;
}

console.log(unique(values));

//Escreva uma função aclean(arr)que retorne um array limpo de anagramas.
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

console.log(aclean(arr));

//Chaves iteráveis
let map = new Map();
map.set('name', 'John');
let keys = [];
for (let key of map.keys()) {
  keys.push(key);
}
keys.push('more');
console.log(keys);
