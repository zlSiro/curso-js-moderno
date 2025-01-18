// Strings Clasico
let nombre = "Juan Pablo";
let apellido = "Valdebenito";
let profesion = "Desarrollador web";
let nya = nombre + " " + apellido + "\n" + profesion;

console.log(nya);

// Template Strings
let plantilla = `
Hola
soy
JP
`;
// con interpolacion

let plantilla2 = `${nombre} ${apellido} 
${profesion}`;
console.log(plantilla);
console.log(plantilla2);

let fichaTecnica = `
    <div class="ficha">
        <h2>${nombre} ${apellido}</h2>
        <h3>${profesion}</h3>
        <p> Forma parte del Equipo</p>
    </div>
`;

let cajaFichas = document.createElement("section");
cajaFichas.innerHTML = fichaTecnica;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.body.appendChild(cajaFichas);
  },
  false
);
