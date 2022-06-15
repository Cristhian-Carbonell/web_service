module.exports = (sequelize, DataTypes) => {
    const Persons = sequelize.define('Persons', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        genero: {
            type: DataTypes.STRING,
        },
        rangosEdades: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: "persons"
    })
    return Persons;
}
