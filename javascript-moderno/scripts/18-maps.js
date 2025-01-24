// Objeto MAPS, es igual que SET pero guardando datos con clave y valor.

const antiguos_gadgets = {
    seis: "Radiocassette",
    siete: "Telefono fijo",
    ocho: "compac disc"
}


const gadgets = new Map(Object.entries(antiguos_gadgets));

gadgets.set(1, "PC")
        .set(2, "TV")
        .set(3, "Tablet")
        .set("cuatro", "Movil")
        .set("cinco", "Laptop");

console.log(gadgets);

// Se puede acceder a un elemento con su clave
console.log(gadgets.get(3));
console.log(gadgets.get("ocho"));

console.log(gadgets.has("seis")); // el metodo has solo ve claves, no valores, devuelve true si existe.

/* WeakMap y WeakSet:
    son lo mismo pero solo con objetos de javascript
*/