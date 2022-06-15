const axios = require('axios');
const createPersons = require('./controller/persons');
const createReporte = require('./controller/reporte');

const personsCovidCOL = (URL) => {
    axios.get(URL)
    .then((res) => {
        createPersons(res);
    })
    .catch(error => {
        console.log(error)
    })
}

const reporteCovidPersons = (URL) => {
    axios.get(URL)
    .then((res) => {
        createReporte(res);
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports = { personsCovidCOL, reporteCovidPersons };
