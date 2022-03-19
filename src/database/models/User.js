module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        dni: {
            type: dataTypes.INTEGER(8)
        },
        address: {
            type: dataTypes.STRING(45)
        },
        phone: {
            type: dataTypes.STRING(45)
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING,
            defaultValue : ''
        },
        group_id: {
            type: dataTypes.INTEGER(10),
            defaultValue : 1
        },
    }; let config = {
        tablename: "user",
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
    User.associate = (models) => {
        User.belongsTo(models.Group, {
            as: "group",
            foreignKey: "group_id"
        })
    }
    return User;
}