let receta = {};

receta.nombre = "Sandwich";
receta.ingredientes = [];

let objeto1= {
    nombre: "Pan",
    cantidad: 2
}

receta.ingredientes.push(objeto1);

let objeto2= {
    nombre: "Queso",
    cantidad: 1
}

receta.ingredientes.push(objeto2);

console.log(receta.ingredientes [0].nombre);

let cantidad = 0;
for (let i=0; i<receta.ingredientes.length; i++){
    cantidad = cantidad + receta.ingredientes[i].cantidad;
}

console.log ("Cantidad total = " + cantidad);