const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión'); // No se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


// En los promise existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Se ha cumplido
// Rejected : Se ha rechazado o no se pudo cumplir