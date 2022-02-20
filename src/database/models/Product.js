module.exports = (sequelize, DataTypes)=>{

    let alias = 'Products';

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        sku:{
            type: DataTypes.INTEGER,
            allowNull: false
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discount:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado:{
            type: DataTypes.INTEGER,
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
        Product.hasMany(models.Images, {
            as: 'images',
            foreignKey: 'products_id'
        });
    }

    return Product;
}