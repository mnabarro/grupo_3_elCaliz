module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        value: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tablename: "Categories",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models)=>{
        Category.belongsToMany(models.Product, {
            as: 'products',
            through: 'products_has_categories',
            foreignKey: 'category_id',
            otherKey: 'product_id',
            timestamps: false
        });
    }

    return Category;
}