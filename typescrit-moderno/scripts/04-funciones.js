"use strict";
// USO NORMAL
function saludo(nombre) {
  return "Un saludo para " + nombre;
}
console.log(saludo("Juan Pablo"));
// Sin devolver NADA / VOID
function mostrarFecha() {
  console.log("04/02/2025");
  //return "04/02/2025"// no se puede devolver nada
}
mostrarFecha();
// NEVER / Fin de la aplicacion
function finApp() {
  throw new Error("La Aplicacion se ha cerrado");
}
//finApp() // Ocaciona una excepcion, es un codigo que nunca deberia ejecutarse
// Parametro de Funciones
function mostrarPais(pais = "Chile", continente) {
  let resultado = "Faltan datos";
  if (pais && continente) {
    resultado = pais + " queda en: " + continente;
  }
  return resultado;
}
console.log(mostrarPais("Chile"));
// Tipo FUNCION
let grupos;
grupos = (datos) => {
  return "Mis grupos favoritos son: " + datos.toString(); // devuelve un array en formato string y separados con coma.
};
console.log(grupos(["Stratovarius", "Los prisioneros", "Metallica"]));
