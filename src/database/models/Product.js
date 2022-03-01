'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Product = sequelize.define('Products', {
        id:{
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        sku:{
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        created_at: {
            type: DataTypes.TIMESTAMP
        },
        updated_at: {
            type: DataTypes.TIMESTAMP
        },
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        precio:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        discount:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        estado:{
            type: DataTypes.INTEGER(11),
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