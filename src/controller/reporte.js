const { Reporte} = require('../databases/db')

const id = []
const reporte10min = (res) => {
    res.data.map(item => {
        for (const ID of id) {
            if (item.id_de_caso == ID) {
                return Reporte.create({
                    fechaReporteWeb: item.fecha_reporte_web,
                    idCaso: itme.id_de_caso,
                    fechaNotificacion: item.fecha_de_notificaci_n,
                    departamento: item.departamento_nom,
                    municipio: item.ciudad_municipio_nom,
                    edad: item.edad,
                    sexo: item.sexo,
                    FuenteContagio: item.fuente_tipo_contagio,
                    ubicacion: item.ubicacion,
                    estado: item.estado,
                    recuperado: item.recuperado
                })
            } else {
                return Reporte.create({
                    fechaReporteWeb: item.fecha_reporte_web,
                    idCaso: itme.id_de_caso,
                    fechaNotificacion: item.fecha_de_notificaci_n,
                    departamento: item.departamento_nom,
                    municipio: item.ciudad_municipio_nom,
                    edad: item.edad,
                    sexo: item.sexo,
                    FuenteContagio: item.fuente_tipo_contagio,
                    ubicacion: item.ubicacion,
                    estado: item.estado,
                    recuperado: item.recuperado
                })
            }
        }
    })
}

const createReporte = (res) => {
    setInterval(reporte10min(res), 600000)
}


const filtrarPersons = () => {
    Reporte.findAll({ attributes: [idCaso]})
        .then(id => {
            id.push(id)
        })
        .catch(err => {
            console.error(err)
        })
}

module.exports = { createReporte, filtrarPersons};
