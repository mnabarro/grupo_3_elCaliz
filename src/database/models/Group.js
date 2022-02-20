module.exports = (sequelize, DataTypes) => {
    let alias = "Groups"; 
    let cols = {
        id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        } ,
    };
    let config = {
        tablename: "groups",
        timestamps: false
    }
    const Group = sequelize.define(alias, cols, config); 
    return Group;
}