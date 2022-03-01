'use strict';

module.exports = (sequelize, DataTypes) => {
    const Adress = sequelize.define("Adresses", {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        direccion: {
            type: DataTypes.STRING
        },
        codigo_postal: {
            type: DataTypes.INTEGER(4)
        },
        localidad: {
            type: DataTypes.VARCHAR(100)
        },
        telefono: {
            type: DataTypes.INTEGER(11)
        },
        state_id: {
            type: DataTypes.TINYINT(10)
        },
        user_id: {
            type: DataTypes.TINYINT(10)
        },
    },  {
            tablename: "Direcciones",
            timestamps: false
    });
    return Adress;
}