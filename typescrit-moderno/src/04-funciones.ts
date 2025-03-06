// USO NORMAL

function saludo(nombre: string): string {
  // despues del parametro se puede indicar el tipo de dato del return
  return "Un saludo para " + nombre;
}
console.log(saludo("Juan Pablo"));

// Sin devolver NADA / VOID

function mostrarFecha(): void {
  console.log("04/02/2025");
  //return "04/02/2025"// no se puede devolver nada
}

mostrarFecha();

// NEVER / Fin de la aplicacion
function finApp(): never {
  throw new Error("La Aplicacion se ha cerrado");
}

//finApp() // Ocaciona una excepcion, es un codigo que nunca deberia ejecutarse

// Parametro de Funciones
function mostrarPais(pais: string = "Chile", continente?: string): string {
  // continente? indica que es un parametro opcional
  let resultado: string = "Faltan datos";

  if (pais && continente) {
    resultado = pais + " queda en: " + continente;
  }
  return resultado;
}

console.log(mostrarPais("Chile"));

// Tipo FUNCION

let grupos: (datos: string[]) => string;

grupos = (datos: string[]) => {
  return "Mis grupos favoritos son: " + datos.toString(); // devuelve un array en formato string y separados con coma.
};

console.log(grupos(["Stratovarius", "Los prisioneros", "Metallica"]));
