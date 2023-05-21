function maxNum(array) {

  if (array.length === 0) {
      return -1;
       }

 let maximo = array [0];
 let indice = 0;

     for (let i=0; i<array.length ; i++) {
            if (array[i] > maximo) {
            maximo = array [i];
            indice = i;
            }
        }
    return indice;
}

const num = [5,3,1,27];
const resultado = maxNum(num);
console.log (resultado);