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
            as: 'category',
            through: 'products_has_categories',
            foreignKey: 'product_id',
            otherKey: 'category_id',
            timestamps: false
        });
        Product.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'product_id'
        });
        Product.belongsToMany(models.Order, {
            as: "order",
            through: "products_has_orders", //a traves de que tabla intermedia se conectan
            foreignKey: "product_id",
            otherKey: "id_pedido",
            timestamps: false,
        })
    }

    return Product;
}