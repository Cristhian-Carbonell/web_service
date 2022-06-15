const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host, 
    dialect: config.dialect
});

// Vinculamos a nuestro modelos a BD
db.Persons = require('../models/persons')(db.connection, DataTypes);
db.Reporte = require('../models/reporte')(db.connection, DataTypes);

module.exports = db;