'use strict';

module.exports = (sequelize, dataTypes) => {
    const Adress = sequelize.define("Adresses", {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        direccion: {
            type: dataTypes.STRING
        },
        codigo_postal: {
            type: dataTypes.INTEGER(4)
        },
        localidad: {
            type: dataTypes.VARCHAR(100)
        },
        telefono: {
            type: dataTypes.INTEGER(11)
        },
        state_id: {
            type: dataTypes.TINYINT(10)
        },
        user_id: {
            type: dataTypes.TINYINT(10)
        },
    },  {
            tablename: "Direcciones",
            timestamps: false
    });
    return Adress;
}