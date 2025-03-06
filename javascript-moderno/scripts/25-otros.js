// SEPARADORES NUMERICOS

let numero = 4_000_000; // No afectan en nada el numero
console.log(numero);

// REPLACE Y REPLACE ALL

let frase = "Voy en mi auto feliz con la Claudia y veo otro auto";
let nuevaFrase = frase.replace("auto", "moto");
let fraseFinal = frase.replaceAll("auto", "Moto"); // cambia todas las coincidencias en el string

console.log(frase);
console.log(nuevaFrase);
console.log(fraseFinal);

// ASIGNADORES LOGICOS

let nombre = "";
let id = 37;

nombre ||= id; // si existe nombre te devuelve el nombre, si no, el ID
console.log(nombre);
