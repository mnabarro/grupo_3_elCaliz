module.exports = (sequelize, DataTypes) => {
    let alias = "Categories"; 
    let cols = {
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        value: {
            type: DataTypes.STRING
        },
    };
    let config = {
        tablename: "categories",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config); //(alias, columas de db, config)

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