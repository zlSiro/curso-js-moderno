// Strings
let nombre = "Juan Pablo";

// Number
let numero = 26;
let decimal = 3.1416;

// Boolean
let mayorEdad = true;
let menorEdad = Boolean(0); // el 1 es True y el 0 es False

// Array
let paises = ["Chile", "Mexico", "España"]; // el Array es un objeto al igual que un JSON

// Null
let vacio = null;

// Undefined
let noDefinido = undefined;

//typeof

/* console.log(
  typeof nombre,
  typeof numero,
  typeof decimal,
  typeof mayorEdad,
  typeof menorEdad,
  typeof paises,
  typeof paises[0],
  typeof vacio
); */

// JSON - JavaScript Object Notation - Objetos literales

let pelicula = {
  titulo: "Star Wars",
  genero: "Ciencia Ficcion",
  year: 1971,
  director: "George Lucas",
  mostrarDatos: function () {
    return `
      **** La pelicula de la semana \n
      Titulo: ${this.titulo}\n
      Genero: ${this.genero} \n
      Años: ${this.genero}\n
      Director: ${this.director}
    `; // el atributo this. hace referencia a las variables internas del objeto JSON
  },
};
//console.log(pelicula.titulo, ' - ', pelicula.genero, ' - ',pelicula.year)
//console.log(typeof pelicula, typeof pelicula.mostrarDatos()) // muestra el tipo de dato que es cada variable
//console.log(pelicula.mostrarDatos())

/* ***** Agregar datos nuevos sin modificar la estructura del objeto  */

pelicula.pais = "Estados Unidos";
// pelicula["pais"] = "Estados Unidos"; otra forma de hacer lo mismo

/* Tambien se pueden borrar datos */
/* delete pelicula.director; // se elimina la propiedad del objeto
delete pelicula["year"];
pelicula.genero = null; */

console.log("titulo" in pelicula); // devuelve true si existe la propiedad dentro del objeto, false si no existe

for (let propiedad in pelicula) {
  datoActual = pelicula[propiedad];
  if (datoActual !== null && typeof datoActual !== "function") {
    console.log(datoActual);
  }
}

// Symbol

let animal = Symbol("Tigre");
let animal2 = Symbol("Tigre");

let user = {
  id: 1,
  nombre: "Juan Pablo",
  web: "Valdebenito",
};

let supercalifrajilistico = Symbol("id");
user[supercalifrajilistico] = 7;

// console.log(animal, animal2)
console.log(user, user[supercalifrajilistico]);
