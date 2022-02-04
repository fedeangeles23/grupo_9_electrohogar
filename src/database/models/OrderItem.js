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
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false 
        },
        quantity: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false 
        },

    }
    let config = {
        tableName: "order_item",
        timestamps: true
    }

    const Order_item = sequelize.define(alias, cols, config)

    Order_item.associate = models => {
        Order_item.belongsTo(models.Order, {
            as:"order",
            foreignKey: "orderId"
        })
        Order_items.belongsTo(models.Product, {
            as:"products",
            foreignKey: "productId"
        })
    }

    return Order_item;
}