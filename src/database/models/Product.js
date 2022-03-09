module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        sku:{
            type: dataTypes.STRING,
            allowNull: false
        },
        nombre:{
            type: dataTypes.STRING,
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
        }
    };
    let config = {
        tableName: 'Products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)
    Product.associate = (models)=>{
        Product.belongsToMany(models.Category, {
            as: 'categories',
            through: 'products_has_categories',
            foreignKey: 'products_id',
            otherKey: 'categories_id',
        });
        Product.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'products_id'
        });
    }

    return Product;
}