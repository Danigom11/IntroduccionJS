// Ejecuta el código de forma estricta y que respeta las buenas prácticas
"use strict";
const producto = {
    nombreProducto : "Monitor 20 pulgadas", // propiedad o llave del objeto
    precio: 300,
    disponible: true
}
// Freeze. Congela el objeto para que no se pueda modificar
// No permite agregar ni eliminar. Tampoco cambiar un valor
Object.freeze(producto);

// Seal. Solo permite modificar las propiedades ya existentes.
// No permite añadir ni eliminar
Object.seal(producto)

// producto.imagen = 'imagen.jpg';

// Para saber si un objeto no se puede modificar 
console.log(Object.isFrozen(producto))

console.log(producto)