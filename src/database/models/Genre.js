'use strict';

module.exports = (sequelize, dataTypes) => {
    const Genre = sequelize.define('Genres', {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(100)
        },
    }, {
        tablename: "Generos",
        timestamps: false
    });
    return Genre;
}
