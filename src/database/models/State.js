module.exports = (sequelize, dataTypes) => {
    let alias = 'States';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING(100)
        },
    };
    let config = {
        tablename: "States",
        timestamps: false
    }
    const State = sequelize.define(alias, cols, config)
    State.associate = (models) => {
        State.hasMany(models.Adress, {
            as: "Adress",
            foreignKey: "state_id"
        })
 
    }
    return State;
}