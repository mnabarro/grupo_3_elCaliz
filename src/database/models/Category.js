module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
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
    };
    let config = {
        tablename: "Categorías",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)
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