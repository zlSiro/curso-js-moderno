"use strict";
// tipos de datos basicos
let texto = "Hola que tal!!"; // solo acepta tipos de datos string
let numero = 10; // solo acepta datos numericos y decimales
numero = 12.4;
numero = 11.1;
let verdadero = true; // solo acepta datos booleanos
verdadero = false;
let normal = "cualquier cosa"; // esta variable acepta cualquier tipo de dato
normal = true;
normal = 12;
let persona = "Juan Pablo"; // tipo de dato string
persona = "Julio";
persona = ""; // no se le puede asignar otro valor que no sea string(como undefinied o  null)
// SE PUEDEN PONER TIPO DE DATOS NULL O UNDEFINIED si apagamos el STRIC MODE
let cualquiera = "Soy un texto"; // el unknown no se puede asignar como valor a otra variable como el any
cualquiera = 1;
if (typeof cualquiera === "number") {
    let miNumero = cualquiera;
    console.log(miNumero);
}
console.log(numero);
console.log(normal);
