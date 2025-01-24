// Async y await es una manera de trabajar con las promesas

let productos = [
  {
    nombre: "Ordenador Gaming",
    marca: "Asus",
    precio: 1200,
  },
  {
    nombre: "Tablet",
    marca: "Samsung",
    precio: 300,
  },
  {
    nombre: "Camara Reflex",
    marca: "Canon",
    precio: 600,
  },
];

function conseguirProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      //reject(Error("A ocurrido un error!!"));
    }, 3000);
  });
}

function conseguirNombre() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Juan Pablo");
      //reject(Error("A ocurrido un error!!"));
    }, 3000);
  });
}

// con el metodo THEN
/* conseguirProductos().then(datos => {
console.log(datos);
}) */

// con ASYNC-AWAIT y TRY-CATCH

async function getMisProductos() {
  try {
    console.log("Cargando informacion...");

    // con Promise.All ejecuta las 2 promesas cuando esten listas
    let informacion = await Promise.all([
      conseguirProductos(),
      conseguirNombre(),
    ]);
    console.log(informacion[0], informacion[1]);

    // al llamar a estas 2 funciones asincoranas se las muestra cuando las 2 promesas esten cumplidas
    let misProductos = await conseguirProductos(); // hay que agregar el async a la funcion(solo funciona dentro de funciones asincronas)
    let miNombre = await conseguirNombre();

    console.log(misProductos, miNombre);
  } catch (error) {
    console.log(error.message);
  }
  console.log("Fuera del try!");
}

getMisProductos();
