// Sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const arreglo = ['Hola', 100, true, null, {nombre: 'Juan', trabajo: 'Programador'}, [1,2,3]]
console.table(arreglo)

// Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[200]);

// Conocer la extensión de un arreglo
console.log(meses.length);

// Recorrer arreglo
numeros.forEach( function(numero){
    console.log(numero)
})

// Agregar nuevos elementos
// forma directa. Se usa poco
numeros[5] = 60;

// Push agrega al final
numeros.push(70, 80, 90)

// unshift agrega al inicio
numeros.unshift(-10, -20, -30)

// eliminar último elemento
numeros.pop()

// eliminar primer elemento
numeros.shift()

// splice elimina un elemento concreto con su indice y cuantos eliminar
numeros.slice(3, 2)

// se recomienda no moficar los arreglos originales
// Rest Operator o Spred Operator
// equivalente push
const nuevoArreglo = [...numeros, 'Junio']

// simula shift
const nuevoArreglo2 = ['Junio', ...numeros]

console.table(numeros)
console.table(nuevoArreglo);
console.table(nuevoArreglo2);