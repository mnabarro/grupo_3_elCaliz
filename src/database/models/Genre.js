module.exports = (sequelize, dataTypes) => {
    let alias = "Generos"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        } ,
    };
    let config = {
        tablename: "genres",
        timestamps: false
    }
    const Genero = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return Genero;
}