module.exports = (sequelize, dataTypes) => {
    let alias = 'Adress';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        direccion: {
            type: dataTypes.STRING
        },
        codigo_postal: {
            type: dataTypes.INTEGER(4)
        },
        localidad: {
            type: dataTypes.STRING
        },
        telefono: {
            type: dataTypes.INTEGER(11)
        },
        state_id: {
            type: dataTypes.INTEGER(10)
        },
        user_id: {
            type: dataTypes.INTEGER(10)
        },
    };
    let config = {
            tablename: "Adresses",
            timestamps: false
    };
    const Adress = sequelize.define(alias, cols, config)
    return Adress;
}