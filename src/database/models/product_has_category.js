'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product_has_category = sequelize.define('ProductsCategories', {
        productos_has_categories_id: {
            type: DataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.TINYINT(10)
        },
        category_id: {
            type: DataTypes.TINYINT(10)
        },
    }, {
        tablename: "products_has_categories",
        timestamps: false 
    })
    return ProductCategory;
}