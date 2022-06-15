const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { connection } = require('./src/databases/db')
const { personsCovidCOL, reporteCovidPersons } = require('./src/index');

const URL = "https://www.datos.gov.co/resource/gt2j-8ykr.json";


const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));;

// Connection MySQL with Sequelize

personsCovidCOL(URL);
reporteCovidPersons(URL);
filtrarPersons(URL)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)

    connection.sync({forcer: false}).then(() => {
        console.log("Se ha establecido la conexión")
    })
})


