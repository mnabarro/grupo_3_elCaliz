'use strict';

module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('Groups', {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING(100)
        } ,
    }, {
        tablename: "Grupos",
        timestamps: false
    });
    return Group;
}