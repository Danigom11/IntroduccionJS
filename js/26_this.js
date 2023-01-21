// This
// no funciona con arrow function
// con arrow function sube hasta window (la ventana global) y en ella no está la variable que buscamos
const reservacion = {
    nombre: 'Dani',
    apellido: 'Gómez',
    total: 5000,
    pagado: false,
    informacion: function() { // this aquí hace referencia al objeto desde el que se llama a la función
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`);
    }
}

console.log(reservacion.informacion());