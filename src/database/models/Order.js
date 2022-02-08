module.exports = (sequelize, dataTypes) => {
    let alias = "Orders"; 
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true
        },
        referencia: {
            type: dataTypes.STRING
        },
        total: {
            type: dataTypes.INTEGER
        },
        metodo_de_pago: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        usder_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tablename: "orders",
        timestamps: false
    }
    const Order = sequelize.define(alias, cols, config); //(alias, columas de db, config)
    return Order;
}