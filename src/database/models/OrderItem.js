module.exports = (sequelize, dataTypes) => {
    let alias = "Order_item";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        orderId: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false 
        },
        productId: {
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
        quantity: {
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },

    }
    const config = {
        tableName: "order_items"
    }

    const Order_items = sequelize.define(alias, cols, config)

    return Order_items;
}