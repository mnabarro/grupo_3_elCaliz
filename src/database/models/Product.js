module.exports = (sequelize, dataTypes)=>{

    let alias = 'Products';

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        sku:{
            type: dataTypes.INTEGER,
            allowNull: false
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
            type: dataTypes.INTEGER,
            allowNull: false
        },
        discount:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        estado:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };

    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models)=>{
        Product.belongsToMany(models.Categories, {
            as: 'categories',
            through: 'products_has_categories',
            foreignKey: 'products_id',
            otherKey: 'categories_id',
            timestamps: false
        });
        Product.belongsTo(models.Images, {
            as: 'images',
            foreignKey: 'products_id'
        });
    }

    return Product;
}