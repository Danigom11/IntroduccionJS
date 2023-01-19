const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 20 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audífono', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// ForEach
// Para iterar sobre un arreglo y mostrar los elementos
carrito.forEach(producto => {
    console.log(producto);
    console.log(producto.nombre);
    console.log(producto.precio);
})

const arreglo1 = carrito.forEach(producto => producto.nombre) // no funciona

// map
// Para crear un nuevo arreglo
carrito.map(producto => {
    console.log(producto);
    console.log(producto.nombre);
    console.log(producto.precio);
})

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`) // si funciona

console.log(arreglo1); // no funciona
console.log(arreglo2); // si funciona
