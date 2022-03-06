module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        referencia: {
            type: dataTypes.STRING
        },
        total: {
            type: dataTypes.INTEGER(11)
        },
        metodo_de_pago: {
            type: dataTypes.STRING
        },
        user_id: {
            type: dataTypes.INTEGER(10)
        },
    };
    let config = {
        tablename: "Pedidos",
        timestamps: false
    };
    const Order = sequelize.define(alias, cols, config)
    return Order;
}