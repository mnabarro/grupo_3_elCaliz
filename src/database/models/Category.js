'use strict';

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Categorie", {
        id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        value: {
            type: DataTypes.STRING
        }
    }, {
        tablename: "Categorías",
        timestamps: false
    });
    Category.associate = (models)=>{
        Category.belongsToMany(models.Products, {
            as: 'products',
            through: 'products_has_categories',
            foreignKey: 'categories_id',
            otherKey: 'products_id',
            timestamps: false
        });
    }

    return Category;
}