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
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        description:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        price:{
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
        tableName: 'product',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)
    Product.associate = (models)=>{
        Product.belongsToMany(models.Category, {
            as: 'category',
            through: 'products_has_category',
            foreignKey: 'products_id',
            otherKey: 'category_id',
            timestamps: false
        })
    }

    return Product;
}