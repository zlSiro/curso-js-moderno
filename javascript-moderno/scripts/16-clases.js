// Una clase es un molde, con el cual uno crea instancias, que son objetos de la clase

class Coche {
  // npuertas = 4 // tengo acceso a esta propiedad por que es publica
  // para hacer que sea una propiedad privada de la clase hay que agregar un gato #
  #npuertas = 4;

  _nplazas = 5; // propiedad protegida

  // hagamos el constructor, aca podemos pasar los parametros
  constructor(marca, modelo, color, velocidad, year) {
    // Propiedades o atributos
    (this.marca = marca),
      (this.modelo = modelo),
      (this.color = color),
      (this.velocidad = velocidad),
      (this.year = year);
  }

  // Metodos - Acciones o funcionalidades que tiene un objeto
  subirVelocidad() {
    this.velocidad += 1;
  }

  bajarVelocidad() {
    this.velocidad -= 1;
  }

  // MEtodos SET y GET (setter y getter)

  set guardarMarca(marca) {
    this.marca = marca;
  }

  get devolverMarca() {
    return this.marca;
  }

  get numeroPuertas() {
    return this.#npuertas;
  }

  get numeroPlazas() {
    return this._nplazas;
  }

  // Metodos Estaticos Dentro de una clase se puede llamar sin necesidad de instanciar a la clase o crear el objeto
  // Sirven para tener una clase llamada metodos y que hagan funciones variadas
  static saludar(nombre) {
    return "Hola " + nombre;
  }
}

// Crear Objeto
let mi_coche = new Coche("Audi", "C4", "Rojo", 100, 2025);

// usando los metodos de la clase
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.bajarVelocidad();

// Usando los getters y setters

// usando la palabra reservada set y get en los metodos ya no se puede hacer esto
/* mi_coche.guardarMarca("Jeep"); // setter
console.log(mi_coche.devolverMarca()); //getter */

console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km");

/* se deberia hacer de esta forma */
// setter
mi_coche.guardarMarca = "Toyota";
// getter
console.log(mi_coche.devolverMarca);
console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km");

// Metodo estatico
console.log(Coche.saludar("Juan Pablo")); // hay que llamar a la clase y luego a su metodo estatico
console.log(mi_coche.numeroPuertas); // esta es una propiedad publica (se accede mediante un metodo)
console.log(mi_coche.numeroPlazas); // esto es una propiedad protegida (se accede mediante un metodo)

// aca le agrego los parametros definidos arriba en la clase Coche()
// podemos imprimir por consola mi_segundo_coche
/* let mi_segundo_coche = new Coche("Chevrolet", "Spark");
console.log(mi_segundo_coche);
console.log(mi_segundo_coche.marca, mi_segundo_coche.modelo); */

/* HERENCIAA */

class Cuatriciclo extends Coche {
  constructor(marca, modelo, color, velocidad, year, cilindrada) {
    super(marca, modelo, color, velocidad, year);
    this.cilindros = cilindrada;
  }

  saltar() {
    return "Has saltado una rampa"; // este es un metodo de la clase hijo
  }
}

let mi_cuatriciclo = new Cuatriciclo("Suzuki", "bajo", "rojo", 150, 2020, 150);

// Hereda todos los atributos y metodos de la clase padre (Coche)
console.log(mi_cuatriciclo);

mi_cuatriciclo.guardarMarca = "Honda";

mi_cuatriciclo.subirVelocidad();

console.log(mi_cuatriciclo.saltar()); // metodo de la clase hijo

console.log(mi_cuatriciclo);
