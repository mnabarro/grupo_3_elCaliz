'use strict';

module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genres', {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(100)
        },
    }, {
        tablename: "Generos",
        timestamps: false
    });
    return Genre;
}
