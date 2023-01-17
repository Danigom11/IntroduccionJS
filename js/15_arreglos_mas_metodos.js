const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// forEach
meses.forEach(function(mes){
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})

// Includes
const resultado = meses.includes('Marzo')
console.log(resultado);

// Some. Para arreglos con objetos
// hay que acceder a cada propiedad para buscar lo que se quiera
const resultado2 = carrito.some(function(producto) {
    return producto.nombre ==='Celular'
})
// con arrow functions
const resultado3 = carrito.some(producto => producto.nombre === 'Celular') 

// Reduce. Tomará todos los métodos y dará un resultado
const resultado4 = carrito.reduce(function(total, producto){ // dos valores
    return total + producto.precio // primer valor más el valorque queramos
}, 0); // 0 es el valor inicial

// Filter. Sirve para obtener elementos concretos
const resultado5 = carrito.filter(function(producto) {
    return producto.precio > 400
    // return producto.precio === 'Celular'
    // return producto.precio !== 'Celular'
});


console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);

