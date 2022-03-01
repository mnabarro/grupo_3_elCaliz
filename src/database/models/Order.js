module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        referencia: {
            type: dataTypes.VARCHAR(100)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        total: {
            type: dataTypes.INTEGER(11)
        },
        metodo_de_pago: {
            type: dataTypes.STRING
        },
        user_id: {
            type: dataTypes.TINYINT(10)
        },
    };
    let config = {
        tablename: "Pedidos",
    };
    const Order_status = sequelize.define(alias, cols, config)
    return Order;
}