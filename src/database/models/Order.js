module.exports = (sequelize, dataTypes) => {
    let alias = "Order";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        userId: {
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
        state: {
            type: dataTypes.VARCHAR(100),
            allowNull: false 
        },
    }
    const config = {
        tableName: "orders"
    }

    const Order = sequelize.define(alias, cols, config)


    return Order;
}