module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        dni: {
            type: dataTypes.INTEGER(8)
        },
        mail: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        estado: {
            type: dataTypes.INTEGER(11),
            defaultValue : 1
        },
        image: {
            type: dataTypes.STRING,
            defaultValue : ''
        },
        group_id: {
            type: dataTypes.INTEGER(10),
            defaultValue : 1
        },
        genre_id: {
            type: dataTypes.INTEGER(10),
            defaultValue : 1
        },
    }; let config = {
        tablename: "Usuarios",
    };
    const User = sequelize.define(alias, cols, config)
    return User;
}