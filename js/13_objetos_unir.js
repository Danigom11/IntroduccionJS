const producto = {
    nombreProducto : "Monitor 20 pulgadas", // propiedad o llave del objeto
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// Buena práctica es no modificar los objetos originales

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);