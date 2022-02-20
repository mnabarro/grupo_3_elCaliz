module.exports = (sequelize, DataTypes) => {
    let alias = "users"; 
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
        dni: {
            type: DataTypes.STRING
        } ,
        mail: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        fecha_registro: {
            type: DataTypes.DATE,
            defaultValue : DataTypes.NOW
        } ,
        estado: {
            type: DataTypes.INTEGER,
            defaultValue : 1
        },
        image: {
            type: DataTypes.STRING,
            defaultValue : ''
        },
        group_id: {
            type: DataTypes.INTEGER,
            defaultValue : 1
        },
        genre_id: {
            type: DataTypes.INTEGER,
            defaultValue : 1
        },
    };
    let config = {
        tablename: "users",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return Usuario;
}