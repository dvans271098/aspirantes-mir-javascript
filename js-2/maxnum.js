function MaxNum(array) {
    let maximo = 0
     for (let i=0; i<array.length;i++) {
            if (array[i] > maximo)
            maximo = array [i]

     }

     return maximo;

}

const num = [5,4,3,7,27];
const resultado = MaxNum(num);
console.log (resultado);