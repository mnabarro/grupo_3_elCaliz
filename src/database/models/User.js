module.exports = (sequelize, dataTypes) => {
    let alias = "users"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        } ,
        apellido: {
            type: dataTypes.STRING
        } ,
        dni: {
            type: dataTypes.STRING
        } ,
        mail: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        fecha_registro: {
            type: dataTypes.DATE
        } ,
        estado: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        },
        group_id: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tablename: "users",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return Usuario;
}