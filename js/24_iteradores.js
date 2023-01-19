// For Loop
for (let i = 1; i <= 10; i++) {
    if (i%2 === 0) {
        console.log(`El número ${i} es par`);   
    } else {
        console.log(`El número ${i} es impar`);
    }
}

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
    console.log(carrito[i].precio);

}


// While Loop

let i = 0;

while (i < 10) { // Condición
    if(i%2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
    i++; // Incremento
}

i = 0;

while(i < carrito.length) {
    console.log(carrito[i].nombre)
    i++;
}


// Do While Loop
// se ejecuta siempre una vez como mínimo y después evalua

i = 0;
do {
    console.log(i);
    i++;
} while (i<10);
