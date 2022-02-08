module.exports = (sequelize, dataTypes) => {
    let alias = "ProductsCategories"; 
    let cols = {
        productos_has_categories_id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        category_id: {
            type: dataTypes.INTEGER
        },

    };
    let config = {
        tablename: "products_has_categories",
        timestamps: false
    }
    const ProductCategory = sequelize.define(alias, cols, config); //(alias, columas de db, config)

    return ProductCategory;
}