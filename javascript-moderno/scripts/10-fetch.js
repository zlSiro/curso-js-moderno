// fetch es una forma de hacer peticiones asincronas (ajax)

window.addEventListener("DOMContentLoaded", (event) => {
  // esto metodo sirve para que cargue toda la pagina antes de cargar el script js
  let contenedor = document.querySelector("#contenedor");
  contenedor.innerHTML = "Cargando...";

  // Peticion AJAX Moderna
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    // hay que hacer otro then para recoger esos datos con formato json
    .then((datosjson) => {
      console.log(datosjson);
      contenedor.innerHTML = "";
      mostrar(contenedor, datosjson);
    })
    .catch((error) => {
      console.log("La peticion ajax a fallado.", error.message);
    });

  // DOM

  function mostrar(contenedor, elementos) {
    elementos.forEach((elemento) => {
      let muestrame = `
            <article>
                <h2>${elemento.title}</h2>
                <p>${elemento.body}</p>
            </article>
            <hr/>
        `;
      contenedor.innerHTML += muestrame;
    });

    return elementos;
  }
});
