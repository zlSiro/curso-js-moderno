// nullish coalescing operator

function multiplicacion(num1, num2) {
    /* num1 = (num1 == null ? 1 : num1);
    num2 = (num2 == null ? 1 : num2); */
    
    num1 = num1 ?? 1; // es lo mismo que esto: num1 = (num1 == null ? 1 : num1);
    num2 = num2 ?? 1; // es lo mismo que esto: num2 = (num2 == null ? 1 : num2);
    console.log(num1, num2)

    return num1 * num2
}

console.log(multiplicacion(2, 12))

function mostrarUsuario(id, nombre) {
    id = id ?? 0;
    nombre = nombre ?? "Usuario desconocido";

    return id + " " + nombre
}

console.log(mostrarUsuario(44))