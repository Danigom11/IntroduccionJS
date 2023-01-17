// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas", // propiedad o llave del objeto
    precio: 300,
    disponible: true
}

console.log(producto);

// sintaxis de punto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

// sintaxis por nombre de la propiedad
console.log(producto["precio"])

// Agregar nuevas propiedades
// solo con un punto y poniendo una que no exista y su valor
producto.imagen = 'imagen.jpg';
console.log(producto)

// Eliminar propiedad
delete producto.disponible;
console.log(producto)
