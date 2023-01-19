const puntaje = `1000`;

if(puntaje == 1000) {// == menos estricto
    console.log('El puntaje es mil');
} else {
    console.log('No es mil');
}

if(puntaje === 1000) { // === más estricto
    console.log('El puntaje es mil');
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito ) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}

const rol = 'Editor';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'Editor'){
    console.log('Eres editor. Tienes acceso limitado');
} else {
    console.log('No tienes acceso');
}

//!== diferente de
