module.exports = (sequelize, DataTypes) => {
    let alias = "ProductsCategories"; 
    let cols = {
        productos_has_categories_id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        category_id: {
            type: DataTypes.INTEGER
        },

    };
    let config = {
        tablename: "products_has_categories",
        timestamps: false
    }
    const ProductCategory = sequelize.define(alias, cols, config); //(alias, columas de db, config)

    return ProductCategory;
}