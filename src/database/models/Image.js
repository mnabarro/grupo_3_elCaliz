'use strict';

module.exports = (sequelize, dataTypes) => {
    const Image = sequelize.define('Images', {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: dataTypes.VARCHAR(100)
        },
        product_id: {
            type: dataTypes.TINYINT(10)
        },
    }, {
        tablename: "Imagenes",
        timestamps: false
    });
    Image.associate = function(models){
        Image.belongsTo(models.Products, {
            as: "products",
            foreignKey: "product_id"
        })
    }

    return Image;
}