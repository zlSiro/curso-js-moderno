// tipos de datos basicos

let texto:string = "Hola que tal!!"; // solo acepta tipos de datos string

let numero:number = 10 // solo acepta datos numericos y decimales
numero = 12.4
numero  = 11.1;

let verdadero:boolean = true // solo acepta datos booleanos
verdadero = false

let normal:any = "cualquier cosa"; // esta variable acepta cualquier tipo de dato
normal = true;
normal = 12;

let persona:string = "Juan Pablo" // tipo de dato string
persona = "Julio"
persona = ""; // no se le puede asignar otro valor que no sea string(como undefinied o  null)
// SE PUEDEN PONER TIPO DE DATOS NULL O UNDEFINIED si apagamos el STRIC MODE

let cualquiera:unknown = "Soy un texto"; // el unknown no se puede asignar como valor a otra variable como el any
cualquiera = 1

if(typeof cualquiera === "number") {
    let miNumero:number = cualquiera;

    console.log(miNumero)
}

console.log(numero)
console.log(normal)