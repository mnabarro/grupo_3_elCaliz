module.exports = (sequelize, DataTypes) => {
    let alias = "Adresses"; 
    let cols = {
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        } ,
        apellido: {
            type: DataTypes.STRING
        } ,
        direccion: {
            type: DataTypes.STRING
        } ,
        codigo_postal: {
            type: DataTypes.STRING
        } ,
        localidad: {
            type: DataTypes.STRING
        } ,
        telefono: {
            type: DataTypes.INTEGER
        } ,
        state_id: {
            type: DataTypes.INTEGER
        } ,
        user_id: {
            type: DataTypes.INTEGER
        } ,

    };
    let config = {
        tablename: "adresses",
        timestamps: false
    }
    const Adress = sequelize.define(alias, cols, config);
    return Adress;
}