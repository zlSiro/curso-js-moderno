let titulo = "StarWars";
let genero = "Ciencia Ficcion";
let duracion = "2 Horas";

const pelicula = {
  titulo,
  genero,
  duracion,
  [genero + "2022"]: "Hola",
  mostrar() {
    return this.titulo + ". Genero: " + this.genero;
  },
};

console.log(pelicula);
console.log(pelicula.mostrar());
console.log(Object.values(pelicula));

// Este metodo convierte el Objeto en un objeto iterable
Object.entries(pelicula).forEach((item) => console.log(item));
