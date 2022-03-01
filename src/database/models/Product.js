'use strict';

module.exports = (sequelize, dataTypes)=>{
    const Product = sequelize.define('Products', {
        id:{
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        sku:{
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        created_at: {
            type: dataTypes.TIMESTAMP
        },
        updated_at: {
            type: dataTypes.TIMESTAMP
        },
        nombre:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        precio:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        discount:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        estado:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
    }, {
        tableName: 'Productos',
    })
    Product.associate = (models)=>{
        Product.belongsToMany(models.Categories, {
            as: 'categories',
            through: 'products_has_categories',
            foreignKey: 'products_id',
            otherKey: 'categories_id',
        });
        Product.hasMany(models.Images, {
            as: 'images',
            foreignKey: 'products_id'
        });
    }

    return Product;
}