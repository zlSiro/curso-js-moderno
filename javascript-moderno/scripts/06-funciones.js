// Una funcion sirve para poder reutilizar codigo dentro de un programa

function saludo(persona) {
  let year = 2025;
  let resta = 80 - 5;
  return (
    "Hola, te mando un saludos " +
    persona +
    " Y estamos en el año " +
    year +
    ". El resultado de una resta es: " +
    resta
  );
}

/* console.log(saludo("Juan Pablo"));
console.log(saludo("Diana"));
console.log(saludo("Jeremy"));
console.log(saludo("Claudia")); */

// Parametros Por defecto

function saludar(persona = "Juan Pablo", year = 2025) {
  // Estos son parametros por defecto
  console.log(
    "Hola, te mando un saludos " + persona + " Y estamos en el año " + year
  );
}

saludar("Pepe", 2023);

/*   Funcion Flecha (Arrow function)   */
// Es una forma mas "limpia" de declarar una funcion. tanto con parametros como anonima

// Exprension funcional normal
let saludos = function (nombre) {
  return "Hola, te mando un saludos " + nombre;
};
console.log(saludos("Juan Pablo"));

// con Funcion Flecha

let saludo3 = (nombre) => "Hola, te mando un saludos " + nombre; // Con un solo parametro. y la flecha hacer el return automaticamente.

console.log(saludo3("Claudia"));

// Con mas de un parametro

let saludo4 = (nombre, pais) =>
  "Hola, te mando un saludos " + nombre + " de " + pais;

console.log(saludo4("Claudia", "Chile"));

// Funcion Flecha con logica dentro

let saludo5 = (nombre, pais) => {
  // aca tengo que pasar la logica entre llaves y tengo que escribir el return

  let continente = "America";

  if (pais !== "Chile") {
    continente = "Europa";
  }

  return (
    "Hola, te mando un saludos " +
    nombre +
    " de " +
    pais +
    " del continente de " +
    continente
  );
};

console.log(saludo5("Claudia", "Chile"));

// Resumen
function multiplicacion(n1, n2) {
  console.log(n1 * n2);
}

let multiply = (n1, n2) => console.log(n1 * n2);

multiplicacion(2, 3);
multiply(4, 3)

// Funcion Flecha como metodo y this
// JSON

let tienda = {
  nombre: "GAME",
  videoJuegos: ["GTA", "FIFA", "Valorant"],
  // formas de crear funcion mostrar
  mostrar: function() {
    console.log(tienda.nombre); // es mejor usar this para hacer referencia a la propiedad del objeto
  },

  mostrar2() {
    this.videoJuegos.forEach(juego => {
      
      if(juego === "GTA") {
        console.log("El mejor Juego de la Historia")
      }
      console.log(juego)
    });
  },
  // Arrow Function
  mostrar3: () => {
    console.log(tienda.nombre); // dentro de una funcion flecha no se puede usar el operador "this"
  }
}

tienda.mostrar();
tienda.mostrar2();
tienda.mostrar3();
