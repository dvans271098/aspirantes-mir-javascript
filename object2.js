let persona = {

    nombre: "Diego",
    edad: 24,
    ciudad : "Bogota",
    profesion: "ingeniero"

}

console.log (persona);

function presentacion(persona){
    return "Hola mi nombre es " +  persona.nombre +  ",tengo " + persona.edad  + " años y vivo en " + persona.ciudad
}

let mensaje = presentacion(persona);
console.log (mensaje);

persona.hobbies = ["diseñar", "leer", "cocinar", "viajar"];
console.log (persona.hobbies);

for (let i=0; i<persona.hobbies.length; i++){
    console.log(persona.hobbies [i]);
}