// Método de propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con ID: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

// añadir una propiedad fuera del objeto
reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción número ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(4);
reproductor.crearPlaylist('Pop');
reproductor.reproducirPlaylist('Pop');