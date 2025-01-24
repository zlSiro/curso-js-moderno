/******* Como seleccion elementos con ID *******/

// DE LA MANERA CLASICA
//let contenedor = document.getElementById("contenedor");

//contenedor.innerText = "Hola soy un texto desde JS";
// Con este metodo le aplico los estilos de la clase ficha que tengo en el CSS
//contenedor.className = "ficha";

// con esto le agrego estilos css
/* contenedor.style.border = "1px solid black";
contenedor.style.backgroundColor = "#CCC"; */

// CON JS MODERNO
let contenedor = document.querySelector("#contenedor");

contenedor.innerText = "Hola soy un texto desde JS";
contenedor.className = "ficha";

/******* Como seleccionar elementos con una CLASE *******/

let contenedores = document.querySelectorAll(".container")
console.log(contenedores)

contenedores.forEach((item, indice) => {
    item.innerText = `Hola soy un texto ${indice} desde JS`;
    item.className = "ficha";

    if(indice === 2) {
        item.style.backgroundColor = "orange"
    }
});

// forma penca de hacer lo mismo pero con ForIN

/*
    for(indice in contenedores {
        contenedores[indice].innerText = `Hola soy un texto ${indice} desde JS`;
        contenedores[indice].className = "ficha";

        if(parseInt(indice) === 2) {
        contenedores[indice].style.backgroundColor = "orange"
    }
    })
*/