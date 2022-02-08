module.exports = (sequelize, dataTypes) => {
    let alias = "Groups"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        } ,
    };
    let config = {
        tablename: "groups",
        timestamps: false
    }
    const Group = sequelize.define(alias, cols, config); 
    return Group;
}