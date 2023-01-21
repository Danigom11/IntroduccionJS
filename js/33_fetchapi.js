async function obtenerEmpleados() {
    
    const archivo = 'empleados.json'

    // con Promises
    // fetch(archivo)
    //     // primero le decimos que tipo de resultado tendrá, json o txt
    //     .then( resultado => resultado.json())
    //     // aquí obtenemos los datos
    //     .then( datos => {
    //         console.log(datos);

    //         // desestructuramos los datos
    //         const {empleados} = datos;
    //         // console.log(empleados);

    //         empleados.forEach(empleado => {
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);

    //             document.querySelector('.contenido').textContent += empleado.nombre;
    //         });
    //     })

    // con Await
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();