let heroes = ["Batman", "Spiderman", "Superman", "Venom", "Aquaman"]

console.log(heroes[0], heroes[1], heroes[2])

//con spread (expandir)
console.log(...heroes)// con los 3 puntos al principio (spread)

function mostarHeroes(heroe1, heroe2) {
    console.log(`
            ***Mis 2 super heroes favoritos****
                -${heroe1}
                -${heroe2}
            fin
        `)
}

mostarHeroes("Batman", "Superman")
mostarHeroes(...heroes)// me toma solo el indice 0 y 1 (en este caso)

let superHeroes = ["Flash", "Wonder Woman", ...heroes]// relleno este nuevo array con el anterior

console.log(...superHeroes)
mostarHeroes(...superHeroes)

/* REST */
// Sirve para tener un rango de parametros indefinidos en una funcion

function peliculas(peli1, peli2, ...restoDePeliculas) {
    console.log(peli1);
    console.log(peli2);
    // ...restoDePeliculas es un array que se puede recorrer con un for
    for(pelis of restoDePeliculas) {
        console.log(pelis)
    }
}
peliculas("StarWars", 
    "El señor de los anillos",
    "Batman",
    "Superman",
    "Gran Torino",
    "Gladiador"
);