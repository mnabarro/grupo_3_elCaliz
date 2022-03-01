'use strict';

module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define("Categorie", {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        value: {
            type: dataTypes.STRING
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