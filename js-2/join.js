function join(array){

    if (array.length === 0) {
        return '';
      }

    let frase = array[0]
    for (i=0; i<(array.length-1); i++) {

        frase = frase + " " + array [i+1];
    }
return frase
}

const palabras = ["Make", "It", "Real"];
const resultado = join(palabras);
console.log (resultado);