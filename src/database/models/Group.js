module.exports = (sequelize, dataTypes) => {
    let alias = "Grupos"; 
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
        tablename: "groups",
        timestamps: false
    }
    const Grupo = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return Grupo;
}