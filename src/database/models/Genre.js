//Probar otra forma de hacerlo segun el Playground, ver si corre

module.exports = (sequelize, dataTypes)=>{
    let alias = 'Genres';
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
        tablename: "genres",
        timestamps: false
    }
    const Genre = sequelize.define(alias, cols, config);
    return Genre;
}
