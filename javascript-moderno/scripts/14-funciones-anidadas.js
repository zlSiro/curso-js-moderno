let nombre = "Juan Pablo";

function mostrarNombres() {
  let apellidos = "Valdebenito";
  function mostarApellidos() {

    let profesion = "Web Dev";
    function mostrarProfesion() {      

      return nombre + " " + apellidos + " " + profesion;
    }

    return mostrarProfesion();
  }

  return mostarApellidos();
}

console.log(mostrarNombres());
