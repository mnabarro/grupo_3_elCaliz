module.exports = (sequelize, dataTypes) => {
    let alias = "EstadosDePedidos"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tablename: "order_status",
        timestamps: false
    }
    const EstadoDePedido = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return EstadoDePedido;
}