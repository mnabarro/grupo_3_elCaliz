module.exports = (sequelize, dataTypes) => {
    let alias = 'Group';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100)
        } ,
    };
    let config = {
        tablename: "group",
        timestamps: false
    };
    const Group = sequelize.define(alias, cols, config)
    Group.associate = (models) => {
        Group.hasMany(models.User, {
            as: "user",
            foreignKey: "group_id"
        })
    }
    return Group;
}