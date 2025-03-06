let persona = {
  nombre: "Juan Pablo",
  apellidos: "Valdebenito",
  domicilio: {
    pais: "Chile",
    ciudad: {
      nombre: "Santiago",
      region: "Metropolitana",
    },
  },
};

// let comprobar_region = persona && persona.domicilio && persona.domicilio.ciudad && persona.domicilio.ciudad.region;

// encadenamiento opcional, es lo mismo que la linea anterior
let comprobar_region =
  persona?.domicilio?.ciudad?.region == undefined ? false : true;
console.log(comprobar_region);
