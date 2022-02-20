module.exports = (sequelize, DataTypes)=>{
    let alias = 'Genres';
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
        tablename: "genres",
        timestamps: false
    }
    const Genre = sequelize.define(alias, cols, config);
    return Genre;
}
