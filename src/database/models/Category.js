module.exports = (sequelize, dataTypes) => {
    let alias = "Categorias"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        } ,
        value: {
            type: dataTypes.STRING
        } ,
    };
    let config = {
        tablename: "categories",
        timestamps: false
    }
    const Categoria = sequelize.define(alias, cols, config); //(alias, columas de db, config)

    Categoria.associate = (models)=>{
        Categoria.belongsToMany(models.Products, {
            as: 'products',
            through: 'products_has_categories',
            foreignKey: 'categories_id',
            otherKey: 'products_id',
            timestamps: false
        });
    }

    return Categoria;
}