module.exports = (sequelize, dataTypes) => {
    let alias = "Adresses"; 
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
        direccion: {
            type: dataTypes.STRING
        } ,
        codigo_postal: {
            type: dataTypes.STRING
        } ,
        localidad: {
            type: dataTypes.STRING
        } ,
        telefono: {
            type: dataTypes.INTEGER
        } ,
        state_id: {
            type: dataTypes.INTEGER
        } ,
        user_id: {
            type: dataTypes.INTEGER
        } ,

    };
    let config = {
        tablename: "adresses",
        timestamps: false
    }
    const Adress = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return Adress;
}