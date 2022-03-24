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
        Category.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'category_id',
        });
    }

    return Category;
}