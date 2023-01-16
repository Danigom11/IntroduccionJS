const producto = "Monitor de 20 pulgadas"
const producto2 = String("Monitor de 30 pulgadas")
const producto3 = new String('Monitor de 50 pulgadas')

console.log(producto)
console.log(producto2)
console.log(producto3)
// para añadir unas comillas a un string usar \ antes
const producto4 = "Monitor 20\""
console.log(producto4)

// Métodos para strings
// Length
console.log(producto.length)

// IndexOf encontrar un elemento en un string
// indica la posición en la que comienza
// Si es >= 0 es que está y si es <0 no está
console.log(producto.indexOf("de"))

// Includes (return true o false) más moderno
console.log(producto.includes('20'))


