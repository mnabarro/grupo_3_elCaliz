module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_has_category';
    let cols = {
        productos_has_categories_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
            type: dataTypes.INTEGER(10)
        },
        category_id: {
            type: dataTypes.INTEGER(10)
        },
    };
    let config = {
        tablename: "products_has_categories",
        timestamps: false 
    };
    const Product_has_category = sequelize.define(alias, cols, config)
    return Product_has_category;
}