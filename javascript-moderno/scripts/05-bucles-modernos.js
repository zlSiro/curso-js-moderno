let nombres = ["Victor", "Paco", "Claudia", "Juan Pablo"];

// bucle clasico for

for (let i = 0; i < nombres.length; i++) {
  //console.log(nombres[i])
}

/* ******* Bucles Modernos ******** */
// para recorrerlos necesitan objetos iterables

// ForOF
for (let nombre of nombres) {
  console.log(nombre);
} // El of lo que hace es recorrer el contenido de los indices

// For IN
// Sirve para recorre json, y extraer las claves
for (let indice1 in nombres) {
  console.log(indice1, nombres[indice1]);
} // Lo que hace el IN es mostrar el indice del contenido

// For EACH
nombres.forEach(function (nombre_actual, indice2) {
  console.log(indice2, nombre_actual);
}); // Sirve para recorrer los diferentes array que uno tenga

// ForEACH mas Limpio

nombres.forEach((nombreActual) => console.log(nombreActual)); // con funcion flecha

/* ******* Iterables ******* */

// Recorrer Strings
/* let sitioweb = "zlsiro.dev";

for (let letra of sitioweb) {
    //console.log(letra)
} */

const miIterable = nombres[Symbol.iterator](); // convertimos las const miIterable en un iterable y recorrer objetos iterables

// console.log(typeof miIterable, miIterable);
console.log(miIterable.next()); // Muestra false por que todavia no termina de iterar
console.log(miIterable.next());
console.log(miIterable.next());
console.log(miIterable.next()); // Muestra true por que ya termino de iterar
console.log(miIterable.next());

// JSON
let fruta = {
  nombre: "Manzana",
  color: "Roja",
  temporada: "Invierno",
}; // No es un objeto iterable

// tengo que convertirlo en un objeto iterable
fruta[Symbol.iterator] = function () {
  let indice = 0;
  let valores = Object.values(this);

  return {
    next() {
      if (indice >= valores.length) {
        return {
          done: true,
          value: undefined,
        };
      }
      return {
        done: false,
        value: valores[indice],
        indice: indice++,
      };
    },
  };
};

for (let propiedad of fruta) {
  console.log(propiedad);
}

for (let propiedad in fruta) {
  console.log(propiedad, fruta[propiedad]);
}
