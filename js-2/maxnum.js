function maxNum(array) {

    if (array.length === 0){
           return "undefined";
    }
    let maximo = 0
     for (let i=0; i<array.length;i++) {
            if (array[i] > maximo)
            maximo = array [i]

     }

     return maximo;

}

const num = [10, 9, 8, 7, 6, 5, 4];
const resultado = maxNum(num);
console.log (resultado);