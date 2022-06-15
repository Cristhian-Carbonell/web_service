const { Persons} = require('../databases/db')


const rangoEdad = {
    rango1: "0-20",
    rango2: "21-40",
    rango3: "41"
}

const createPersons = (res) => {
    res.data.map(item => {
        if (item.edad <= 20  ) {
            console.log("rango edad 1: ", item.edad)
            return Persons.create({
                genero: item.sexo,
                rangoEdades: rangoEdad.rango1
            })
        } else if (item.edad <= 40) {
            console.log("rango edad 2: ", item.edad)
            return Persons.create ({
                    genero: item.sexo,
                    rangoEdades: rangoEdad.rango2
                })
        } else {
            console.log("rango edad 3: ", item.edad)
            return Persons.create ({
                    genero: item.sexo,
                    rangoEdades: rangoEdad.rango3
                })
        }
    })
}

module.exports = createPersons;
