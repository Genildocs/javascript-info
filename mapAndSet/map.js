let frutas = new Map();
frutas
  .set('Frutas', ['laranja', 'abacate', 'limao'])
  .set('Vegetais', ['cebola', 'alface']);
console.log(frutas);

for (let key of frutas.keys()) {
  console.log(key);
}
console.log('--------');
for (let value of frutas.values()) {
  console.log(value);
}
console.log('--------');
for (let entry of frutas.entries()) {
  console.log(entry);
}
console.log('--------');
frutas.forEach((value, key, map) => {
  console.log(`${key} : ${value}`);
});
console.log('--------');
let obj = {
  name: 'John',
  age: 30,
};

let map = new Map(Object.entries(obj));
console.log(map);

console.log('--------');
let fruta = Object.fromEntries(frutas.entries());
console.log(fruta);

console.log('--------');
console.log('--------');
console.log('--------');
const questions = new Map([
  ['question', 'Qual sua linguagem de programação favorita?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') {
    console.log(`${key}: ${value}`);
  }
}

const resposta = 3;
// questions.get('correct') === resposta ? console.log(questions.get(true)) : console.log(questions.get(false))
console.log(questions.get(questions.get('correct') === resposta));
