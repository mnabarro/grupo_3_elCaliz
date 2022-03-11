module.exports = (sequelize, dataTypes) => {
    let alias = 'Group';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(100)
        } ,
    };
    let config = {
        tablename: "Grups",
        timestamps: false
    };
    const Group = sequelize.define(alias, cols, config)
    /*Group.associate = (models) => {
        Group.belongsTo(models.User, {
            as: "User",
            foreignKey: "group_id"
        })
    }*/
    return Group;
}