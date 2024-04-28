let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

const users = [john, pete, mary];
let nomes = users.map((nome) => nome.name);
console.log(nomes);

//

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];
let usersMapped = users2.map(item=> {
  return  {fullName: `${item.name} ${item.surname}`, id: item.id}
    }
)
console.log(usersMapped)
console.log(usersMapped[0].id)
console.log(usersMapped[0].fullName)