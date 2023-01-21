// POO

// Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object constructor
// Un objeto tiene diferentes variables en una forma
// Clase es el contenedor de toda la forma, datos y funciones que va a tener un objeto en él
// Al constructor hay que ponerle todos los valores que tendrá el objeto
// Es como un plano para crear diferentes objetos
function Cliente(nombre, apellido) { // Parámetros
    this.nombre = nombre;
    this.apellido = apellido;
}

// Prototipe
// Crear funciones específicas para un objeto concreto
Cliente.prototype.formatearCliente = function() {
    return `El cliente es ${this.nombre} ${this.apellido}`; 
}

function Producto(nombre, precio, disponible) { // Parámetros
    this.nombre = nombre;
    this.precio = precio;
}

// Prototipe
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`; 
}

const producto2 = new Producto('Monitor Curvo de 49"', 800 ); // Argumentos
const producto3 = new Producto('Laptop', 300); // Argumentos
const cliente = new Cliente('Daniel', 'Gómez');

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

console.log(cliente);
console.log(cliente.formatearCliente());