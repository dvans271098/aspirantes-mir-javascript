function join(array){

    let frase = ""
    for (i=0; i<array.length; i++) {

        frase = frase + " " + array [i];
    }
return frase
}

const palabras = ["Hola", "Mundo", "Soy", "Diego"];
const resultado = join(palabras);
console.log (resultado);