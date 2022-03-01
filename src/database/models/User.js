'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        dni: {
            type: DataTypes.INTEGER(8)
        },
        mail: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.VARCHAR(100)
        },
        estado: {
            type: DataTypes.INTEGER(11),
            defaultValue : 1
        },
        image: {
            type: DataTypes.STRING,
            defaultValue : ''
        },
        group_id: {
            type: DataTypes.TINYINY(10),
            defaultValue : 1
        },
        genre_id: {
            type: DataTypes.TINYINT(10),
            defaultValue : 1
        },
    }, {
        tablename: "Usuarios",
    })
    return Usuario;
}