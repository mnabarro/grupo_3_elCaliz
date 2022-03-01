'use strict';

module.exports = (sequelize, dataTypes) => {
    const Group = sequelize.define('Groups', {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(100)
        } ,
    }, {
        tablename: "Grupos",
        timestamps: false
    });
    return Group;
}