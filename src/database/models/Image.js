module.exports = (sequelize, dataTypes) => {
    let alias = "Imagenes"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tablename: "images",
        timestamps: false
    }
    const Imagen = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return Imagen;
}