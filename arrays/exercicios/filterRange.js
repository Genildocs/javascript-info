//Escreva uma função filterRange(arr, a, b)que obtenha um array arr, procure elementos com valores
// maiores ou iguais a e menores ou iguais b e retorne um resultado como um array.
//
// A função não deve modificar o array. Deve retornar o novo array.

let arr = [5,3,8,1]
function filterRange(arr, a, b){
    let filtered = arr.filter((item)=>{
        return item >= a && item <= b
    })

    return `${arr} | ${filtered}`
}
console.log(filterRange(arr, 1 , 4))