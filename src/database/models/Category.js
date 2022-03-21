module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100)
        }
    };
    let config = {
        tableName: "category",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models)=>{
        Category.belongsToMany(models.Product, {
            as: 'product',
            through: 'products_has_category',
            foreignKey: 'category_id',
            otherKey: 'products_id',
            timestamps: false
        });
    }

    return Category;
}