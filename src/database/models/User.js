'use strict';

module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('Users', {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        dni: {
            type: dataTypes.INTEGER(8)
        },
        mail: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.VARCHAR(100)
        },
        estado: {
            type: dataTypes.INTEGER(11),
            defaultValue : 1
        },
        image: {
            type: dataTypes.STRING,
            defaultValue : ''
        },
        group_id: {
            type: dataTypes.TINYINY(10),
            defaultValue : 1
        },
        genre_id: {
            type: dataTypes.TINYINT(10),
            defaultValue : 1
        },
    }, {
        tablename: "Usuarios",
    })
    return User;
}