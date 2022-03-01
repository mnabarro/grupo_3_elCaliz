'use strict';

module.exports = (sequelize, dataTypes) => {
    const Product_has_category = sequelize.define('ProductsCategories', {
        productos_has_categories_id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: dataTypes.TINYINT(10)
        },
        category_id: {
            type: dataTypes.TINYINT(10)
        },
    }, {
        tablename: "products_has_categories",
        timestamps: false 
    })
    return Product_has_category;
}