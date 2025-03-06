let persona = ["Juan Pablo", 37];

if (persona[1] >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// Operador ternario

let edad = persona[1] >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(edad);

// Diferencia entre == y === and === y != y !==

let edad1 = 80;
let edad2 = "80";

if (edad1 === edad2) {
  console.log("Edades Iguales");
} else {
  console.log("Edades distintas");
}
// Arroja que son edades iguales por que el valor es el mismo pero el tipo de dato es distinto
// Para comprobar si el valor y el tipo de dato es el mismo se ocupa el triple igual ===
