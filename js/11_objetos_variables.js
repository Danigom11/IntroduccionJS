// Convertir propiedades de objetos a variables
const producto = {
    nombreProducto : "Monitor 20 pulgadas", // propiedad o llave del objeto
    precio: 300,
    disponible: true
}

//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto)
//console.log(nombreProducto)

// Destructuring
const {nombreProducto, precio, disponible} = producto;
console.log(precio)
console.log(nombreProducto)
console.log(disponible)
