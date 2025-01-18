// Ultima version de JS EcmaScript 2021 / ES12 / ES.NEXT

// Variables: var, let, const
// contenedor de informacion, caja para guardar un dato

// VAR: ambito global o funcional
var nombre = "Juan Pablo";

function mostrarNombre() {
    var nombre = "Pepito";
    var apellido = "Valdebenito"; // esta variable es solo local de la funcion, solo esta definida en la funcion
    console.log("Dentro:", nombre);
    console.log("Dentro:", apellido);
}

/* mostrarNombre(); // Aqui invocamos la funcion
console.log("Fuera:", nombre);
console.log("Dentro:", apellido); */

// LET: ambito de bloque a nivel de rendimiento es mejor

let pais = "Chile"

function mostrarPais() {
    console.log(pais)
}

mostrarPais();

if(pais == 'Chile') {
    let continente = "America"; // esta variable let esta solo en este bloque if
    // con var tiene una caracteristica global de la variable
    console.log(continente)
}
// no accesible desde fuera del bloque
//console.log(continente);

for(let contador = 0; contador <= 5; contador++) {
    console.log(contador)
}

// no accesible desde fuera del bloque
//console.log("CONTADOR:", contador) // tengo acceso a esta variable por que no se a definido ni con LET ni VAR, es un VAR por defecto
// con let ya no tengo acceso a la variable


/*  CONST: Crear constantes o variables que su contenido no es variable */

let edad = 18;
console.log(edad);

edad = 12

console.log(edad);

const ciudad = "Santiago"
const fechaNacimiento = 1987;
console.log(ciudad, fechaNacimiento)