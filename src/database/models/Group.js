module.exports = (sequelize, dataTypes) => {
    let alias = 'Group';
    let cols = {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(100)
        } ,
    };
    let config = {
        tablename: "Grupos",
        timestamps: false
    };
    const Group = sequelize.define(alias, cols, config)
    return Group;
}