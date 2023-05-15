function sum(array){
 let total = 0;
    for (let i=0; i<array.length; i++) {
         total= total + array[i]
        
    }
 return total;

}

const num = [10,20,30,40,50];
const resultado = sum(num);

console.log(resultado);