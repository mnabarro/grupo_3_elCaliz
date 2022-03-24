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
            allowNull: false,
            defaultValue : 'A002'
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        description:{
            type: dataTypes.TEXT,
            allowNull: false,
            defaultValue : 'Producto en edición'
        },
        category_id:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue : 10
        },
        discount:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue : 0
        },
        image:{
            type: dataTypes.TEXT,
            allowNull: true
        },
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    let  Product = sequelize.define(alias, cols, config)

    Product.associate = (models)=>{
        Product.belongsTo(models.Category, {
            as: 'categoria',
            foreignKey: 'category_id',
        })
    }

    return Product;
}