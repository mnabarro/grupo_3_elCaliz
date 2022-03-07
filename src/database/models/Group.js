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
    return Group;
}