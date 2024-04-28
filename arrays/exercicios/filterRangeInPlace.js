//Escreva uma função filterRangeInPlace(arr, a, b)que obtenha um array arre
// remova dele todos os valores, exceto aqueles que estão entre ae b. O teste é: a ≤ arr[i] ≤ b.
// A função deve modificar apenas o array. Não deve retornar nada.
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
   for(let i= 0; i < arr.length; i++){
       let val = arr[i]
       if(val < a || val > b){
           arr.splice(i, 1);
           i--
       }
   }

   console.log(arr)
}

filterRangeInPlace(arr, 1,4)