module.exports = (sequelize, dataTypes) => {
    let alias = "UserLikes";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        userId: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false 
        },
        productId: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false 
        },

    }
    let config = {
        tableName: "UserLikes",
        timestamps: true
    }

    const UserLikes = sequelize.define(alias, cols, config)

    UserLikes.associate = models => {
        UserLikes.belongsTo(models.User, {
            as:"users",
            foreignKey: "userId"
        })
        UserLikes.hasMany(models.Order_item, {
            as: "order_items",
            foreignKey: "orderId"
        })
    }

    return UserLikes;
}
