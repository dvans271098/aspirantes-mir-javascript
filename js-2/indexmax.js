function MaxNum(array) {
    let maximo = 0
    let indice = 0
     for (let i=0; i<array.length ; i++) {
            if (array[i] > maximo) {
            maximo = array [i];
            indice = i;
            }
        

     }

     return indice;

}

const num = [55,4,3,7,27];
const resultado = MaxNum(num);
console.log (resultado);