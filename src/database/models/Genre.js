module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
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
        tablename: "Genres",
        timestamps: false
    }
    const Genre = sequelize.define(alias, cols, config)
    /*Genre.associate = (models) => {
        Genre.belongsTo(models.User, {
            as: "User",
            foreignKey: "genre_id"
        })
    }*/
    return Genre;
}
