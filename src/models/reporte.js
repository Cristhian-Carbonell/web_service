module.exports = (sequelize, DataTypes) => {
    const Reporte= sequelize.define('Reporte', {
        fechaReporteWeb: {
            type: DataTypes.STRING,
        },
        idCaso: {
            type: DataTypes.STRING,
        },
        fechaNotificacion: {
            type: DataTypes.STRING,
        },
        departamento: {
            type: DataTypes.STRING,
        },
        municipio: {
            type: DataTypes.STRING,
        },
        edad: {
            type: DataTypes.STRING,
        },
        sexo: {
            type: DataTypes.STRING,
        },
        FuenteContagio: {
            type: DataTypes.STRING,
        },
        ubicacion: {
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.STRING,
        },
        recuperado: {
            type: DataTypes.STRING,
        },
    },{
        tableName: "reporte"
    });
    return Reporte;
}
