// El objeto set. es una nueva estructura en la que puedo almacenar valores unicos de cualquier tipo

// Crear el Set
let gadgets = new Set(["Movil", "Tablet", "Portatil"]);
console.log(gadgets);

// Agregar elementos al Set
// se puede agregar cualquier tipo de elemento
/* gadgets.add(12);
gadgets.add(["Hola", "Hola"]); */

gadgets.add("Smart Tv");
gadgets.add("Chromecast");
gadgets.add("Vaper");
gadgets.add("Mouse");
gadgets.add("Mouse"); // aunque este duplicado este es un elemento unico que no se agrega al set

// Sacar el tamaño del set
console.log(gadgets.size);

// Eliminar elementos del Set
gadgets.delete("Mouse");
gadgets.delete("Vaper");
console.log(gadgets.size);

// Comprobar existencia
console.log(gadgets.has("tv"));
console.log(gadgets.has("Chromecast"));

// Recorrer el Set

/* for(let item of gadgets) {
    console.log(item);
} */

gadgets.forEach((item) => console.log(item));

// Limpiar el Set
gadgets.clear();
console.log(gadgets);
