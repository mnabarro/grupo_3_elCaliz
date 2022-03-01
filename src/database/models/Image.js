'use strict';

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Images', {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.VARCHAR(100)
        },
        product_id: {
            type: DataTypes.TINYINT(10)
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