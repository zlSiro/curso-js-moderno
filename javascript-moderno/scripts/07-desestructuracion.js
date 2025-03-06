// La desestructuracion en JS nos permite extraer datos (de objetos, arrays, strings) y convertirlos a variables cada uno de esos datos

let frutas = ["Manzana", "Pera", "Naranja", "Sandia"];

// Forma clasica
// let manzana = frutas[0];
// let pera = frutas[1];

// Desestructurar array

let [manzana, pera, naranja, sandia] = frutas;
console.log(naranja);

// Desestructurar Objetos

let persona = {
  nombre: "Juan Pablo",
  edad: 37,
  altura: 177,
  pais: "Chile",
};

let { nombre, edad, altura, pais } = persona;
// al ser un objeto tiene clave y valor a la cual hacer referencia.

// Desestructurar Strings

let usuario = "Juan Pablo Web 98789238 04/04/1987 Santiago";
let [nombre1, ap_paterno, ap_materno, cel, fecha_nac, ciudad] =
  usuario.split(" "); // hay que usar el split para que divida cada palabra del string

// Crear varias variables
let lenguaje = "JavaScript",
  framework = "Angular",
  editor = "VS Code";

// Utilidad parametro funciones

function mostrarUsuarios({ nombre = "", apellido = "", ciudad = "Santiago" }) {
  console.log(nombre + " " + apellido + " " + ciudad);
}

mostrarUsuarios({ apellido: "Valdebenito", ciudad: "Concepcion" });
