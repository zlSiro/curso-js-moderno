let personas = ["Juan Pablo", "Claudia", "Jeremy", "Diana", "Gia"];

// Como buscar en un array - find
let busquedas = personas.find((persona) => {
  return persona === "Jeremy";
});

// Buscar en un array - findIndex
let busqueda = personas.findIndex((persona) => persona === "Claudia");

console.log(busquedas);
console.log(busqueda); // devolvera el indice en que se encuentra, si no lo encuentra devuelve -1

// Crear un array basandome en un objeto iterable
let array_letras = Array.from("juanpablo.dev");
console.log(array_letras);

let arrayNumeroCuadrado = Array.from(
  [1, 2, 3, 4, 5, 6],
  (numero) => numero * numero
);
console.log(arrayNumeroCuadrado);

// Comprobar su existe un elemento dentro de un array - includes
console.log(personas.includes("Juan Pablo")); // devuelve true o false si existe el elemento en el array

// Filtrar arrays - filter
let nuevasPersonas = personas.filter((persona) => persona.length >= 4);
console.log(nuevasPersonas); // se crea un nuevo array con la condicion que se le indica en el callback
