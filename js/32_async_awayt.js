function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');
        
        setTimeout( () => {
            resolve('Los clientes fueron descargados')
        }, 5000 ); // milisegundos que espera hasta que se reproduzca
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');
        
        setTimeout( () => {
            resolve('Los pedidos fueron descargados')
        }, 3000 ); // milisegundos que espera hasta que se reproduzca
    });
}

// función asíncrona
async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarNuevosPedidos();
        // // aquí se llamaría a una función que solo se va a ejecutar
        // // si funciona correctamente
        // console.log('Este código si se bloquea');
        // console.log(clientes);

        // así se pueden ejecutar dos awaits a la vez
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app()

console.log('Este código no se bloquea');