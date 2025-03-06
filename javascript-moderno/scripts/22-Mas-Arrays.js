let personas = ["Juan Pablo", "Claudia", "Jeremy", "Diana", "Gia"];

let paises = [
  {
    nombre: "Chile",
    continente: "America",
  },
  {
    nombre: "Ecuador",
    continente: "America",
  },
  {
    nombre: "Brasil",
    continente: "America",
  },
];

// Metodo SOME
let existe = personas.some((nombre) => nombre === "Juan Pablo"); // devuelve true o false dependiendo si existe o no
console.log(existe);

// Metodo EVERY
let esIgualEnTodos = paises.every((pais) => pais.continente === "America"); // devuelve true o false dependiendo si es igual en todos.

// Metodo MAP
let nuevas_personas = personas.map((persona) => {
  let nueva = persona + " Hola";
  console.log(nueva);
  return nueva;
}); // Es lo mismo que hacer un ForEACH. la diferencia es que el map devuelve el array y el forEach no devuelve nada.

// Metodo REDUCE
console.log(
  personas.reduce((acumulador, actual) => {
    let valorActual = ", " + actual;
    return acumulador + valorActual;
  })
); // Recorre el array y junta todos los elementos con un acumulador
