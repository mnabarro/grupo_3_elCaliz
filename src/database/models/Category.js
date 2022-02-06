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
    return Categoria;
}