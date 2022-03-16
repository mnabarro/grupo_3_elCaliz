module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
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
        tablename: "Users",
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
    User.associate = (models) => {
        User.belongsTo(models.Group, {
            as: "Grupo",
            foreignKey: "group_id"
        }),
        User.belongsTo(models.Genre, {
            as: "Genero",
            foreignKey: "genre_id"
        })
        User.hasMany(models.Order, {
            as: "Order",
            foreignKey: "user_id"
        })
    }
    return User;
}