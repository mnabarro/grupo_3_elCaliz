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
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
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
    };
    let config = {
        tableName: 'Productos',
    };
    const Product = sequelize.define(alias, cols, config)
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