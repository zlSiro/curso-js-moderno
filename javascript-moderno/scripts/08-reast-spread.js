let heroes = ["Batman", "Spiderman", "Superman", "Venom", "Aquaman"]

console.log(heroes[0], heroes[1], heroes[2])

//con spread (expandir)
console.log(...heroes)// con los 3 puntos al principio

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