//Temos um array de strings arr. Gostaríamos de ter uma cópia ordenada dele,
// mas mantê- arrla inalterada.
// Crie uma função copySorted(arr)que retorne tal cópia.
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    let sorted  = []
    return sorted  = sorted.concat(arr).sort((a, b)=>{
        if(a > b) return -1
    }).reverse()
}
console.log(copySorted(arr))