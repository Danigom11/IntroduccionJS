// Declaración de función

function sumar() { // () argumentos
    // Cuerpo función
    console.log(10+10);
}
// si se llama antes de la función no da fallo por el hoisting explicado más abajo
sumar()

// Expresión de la función
const sumar2 = function() {
    console.log(3+3);
}
// si se llama antes de crearla da error por que lo considera una variable
sumar2();

// IIFE se invoca ella misma.
// Sirven para proteger las variables y que nos se mezclen con otro archivo
// Si en un archivo hay variables que solo se quiere que se usen en el se usa esta función

(function() {
    const nombre = 'Dani' // en el archivo se puede usar pero no en otro
})();

// Hoisting 
// Se ejecuta en dos vueltas. En la primera vuelta registra las funciones
// en la segunda se ejecutan las llamadas
