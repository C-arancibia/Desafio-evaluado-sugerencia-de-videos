// Modulo de reproducción de videos
const moduloVideos = (url, id) => {
    // Función anónima que se ejecuta inmediatamente
    (() => {
      // Seleccionar el elemento iframe por su ID y establecer la fuente del video
    document.getElementById(id).setAttribute("src", url);
    })();
};

  // Clase base Multimedia
class Multimedia {
    constructor(url) {
    this._url = url;
    }
    // Método para obtener la URL del video
    getUrl() {
    return this._url;
    }
    // Método para establecer el tiempo de inicio del video
    setInicio(tiempo) {
      // Concatenar el tiempo al final de la URL del video
    this._url = `${this._url}&t=${tiempo}`;
      // Llamar al módulo de reproducción de videos para actualizar la fuente del video
    moduloVideos(this.getUrl(), this.id);
      // Devolver un mensaje indicando el propósito del método
    return "Este método es para realizar un cambio en la URL del video";
    }
}

  // Clase Reproductor que hereda de Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url); // Llamar al constructor de la clase base Multimedia
      this.id = id; // Establecer el ID del reproductor
    }
    // Método para reproducir el video
    playMultimedia() {
      // Llamar al módulo de reproducción de videos para reproducir el video
    moduloVideos(this.getUrl(), this.id);
    }
}

  // Instancias de Reproductor para diferentes tipos de videos
const musica = new Reproductor(
    "https://www.youtube.com/embed/mPbQt2Or8so?list=RDmPbQt2Or8so&start_radio=1",
    "musica"
);
const pelicula = new Reproductor(
    "https://www.youtube.com/embed/cR05bEhbWAs",
    "peliculas"
);
const series = new Reproductor(
    "https://www.youtube.com/embed/4ElAgtup6Y0",
    "series"
);

  // Ejecución de métodos para reproducir los videos
musica.playMultimedia();
pelicula.playMultimedia();
series.playMultimedia();

  // Establecer el tiempo de inicio para la serie
series.setInicio(30);
