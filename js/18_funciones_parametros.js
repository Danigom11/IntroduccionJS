function sumar(numero1 = 0, numero2 = 0) { //() parámetros por default
    // se le añade al parámetro un valor para que tenga un valor inicial siempre que sea necesario
    // si al llamar a la función no se le da otro valor coge el default
    console.log(numero1 + numero2);
}
sumar(10, 10); // argumentos o valores reales
sumar(12, 3);
sumar(4, 1);
sumar(1); // usa un parámetro default

const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);