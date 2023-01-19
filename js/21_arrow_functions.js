// Arrow Functions
// Si está en una sola linea no son necesarias las llaves
const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5,10);

// Cuando solo se pasa un parámetro los paréntesis son opcionales
const aprendiendo = tecnologia => {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript')



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


meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
})
// Si está en una linea el return es implícito y se puede quitar
const resultado2 = carrito.some(producto => producto.nombre ==='Celular');
const resultado3 = carrito.some(producto => producto.nombre === 'Celular');
const resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0);
const resultado5 = carrito.filter(producto => producto.precio > 400);


console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);

