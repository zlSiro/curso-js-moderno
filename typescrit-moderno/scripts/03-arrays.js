"use strict";
// ARRAY
let personas = ["Juan pablo", "Jeremy", "Claudia"]; // Esto es un array de strings
personas.push("Daniela");
console.log(personas);
let years = [2000, 2001, 2002];
years.push(2025);
console.log(years);
// TUPLAS: si ya se la longitud de ese array y se puede asignar un tipo de dato a cada elemento de ese array
let pelicula = ["Batman Begins", true, 1990];
pelicula.push("Hola"); // se le puede agregar elementos pero sigiendo el orden del tipo de la tupla
console.log(typeof pelicula);
console.log(pelicula);
// ENUM - Enumeracion
var datosPersonales;
(function (datosPersonales) {
    datosPersonales["nombre"] = "Juan Pablo";
    datosPersonales[datosPersonales["rut"] = 123123] = "rut";
    datosPersonales["direccion"] = "Fantasia";
    datosPersonales["ciudad"] = "Santiago";
})(datosPersonales || (datosPersonales = {})); // es un tipo de dato de solo lectura. No se puede volver a asignar un valor.
// datosPersonales.nombre = "paco"
console.log(datosPersonales.nombre, datosPersonales.rut);
// CAST o CONVERTIR A OTRO TIPO DE DATO
let valorDesconocido = 4465;
let fraseFinal = valorDesconocido; // con esta etiqueta se fuerza a que sea este tipo de dato
console.log(fraseFinal);
