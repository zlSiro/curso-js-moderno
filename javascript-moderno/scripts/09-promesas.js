// Simulacion de una llamada a una API externa

// array de productos
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
  // Para esto existen las promesas
  return new Promise((resolve, reject) => {
    console.log("Cargando Productos ...");

    setTimeout(() => {
      resolve(productos);
      reject(Error("A ocurrido un error!!"));
    }, 2500);
  });
}

// Encadenando promesas

function productoComprado(nombre) {
  return new Promise((resolve, reject) => {
    console.log("Haciendo la compra...");
    setTimeout(() => {
      resolve({
        producto: nombre,
        cliente: "Juan Pablo",
      });
      reject(Error("A ocurrido un error!!"));
    }, 2500);
  });
}

function procesarVenta(venta) {
  console.log("Producto comprado: ", venta);

  productos = productos.filter((producto) => {
    return producto.nombre != venta.producto;
  });

  return productos;
}

//console.log(conseguirProductos());
// Esto devolvera undefined por que js ya leyo el console.log y el return no llego a tiempo

/* conseguirProductos()
.then(items => console.log(items))
// Con el metodo then se recibe esa new Promise
.catch(error => console.log(error.message))
// con el metodo catch se recibe el mensaje de error del reject
.finally(() => console.log("PROMESA FINALIZADA")); */

// Encadenando promesas con el then
conseguirProductos()
  .then((items) => {
    console.log("Productos Disponibles: ", items);
    return productoComprado("Ordenador Gaming");
  })
  .then((venta) => {
    procesarVenta(venta);
    return productoComprado("Tablet");
  })
  .then((venta) => {
    procesarVenta(venta);
    return productoComprado("Camara Reflex");
  })
  .then((venta) => {
    procesarVenta(venta);
  })
  .catch((err) => console.log(err.message))
  .finally((items) => {
    if (productos.length >= 1) {
      console.log("Productos que quedan disponibles: ", productos);
    } else {
      console.log("No quedan productos disponibles");
    }
    console.log("PROMESA FINALIZADA");
  });

// Promise ALL
// ejecuta las promesas todas de una vez
Promise.all([
  conseguirProductos(),
  productoComprado("Ordenador Gaming"),
  productoComprado("Tablet"),
]).then((venta) => {
  console.log(venta);
});
