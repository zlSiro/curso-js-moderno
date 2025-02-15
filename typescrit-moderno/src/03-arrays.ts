// ARRAY
let personas:string[] = ["Juan pablo", "Jeremy", "Claudia"]; // Esto es un array de strings
personas.push("Daniela")
console.log(personas)

let years:number[] = [2000, 2001, 2002];
years.push(2025)
console.log(years)


// TUPLAS: si ya se la longitud de ese array y se puede asignar un tipo de dato a cada elemento de ese array
let pelicula:[string, boolean, number] = ["Batman Begins", true, 1990];

pelicula.push("Hola") // se le puede agregar elementos pero sigiendo el orden del tipo de la tupla

console.log(typeof pelicula)
console.log(pelicula)


// ENUM - Enumeracion
enum datosPersonales { // es un objeto con una serie de elementos identificables usando el . para acceder a ellas
    nombre = "Juan Pablo",
    rut = 123123,
    direccion = "Fantasia",
    ciudad = "Santiago"
} // es un tipo de dato de solo lectura. No se puede volver a asignar un valor.
// datosPersonales.nombre = "paco"

console.log(datosPersonales.nombre, datosPersonales.rut)


// CAST o CONVERTIR A OTRO TIPO DE DATO
let valorDesconocido:any = 4465;
let fraseFinal:number = <number>valorDesconocido // con esta etiqueta se fuerza a que sea este tipo de dato

console.log(fraseFinal)