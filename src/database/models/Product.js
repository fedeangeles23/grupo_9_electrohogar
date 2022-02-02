module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.VARBINARY(45),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: dataTypes.VARCHAR(150),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(11).NULL,
        },
        description: {
            type: dataTypes.VARCHAR(1000)
        },
        subcategoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        images: {
            type: dataTypes.TEXT.NULL,
        }  
    }
    const config = {
        tableName: "products"
    }

    const Product = sequelize.define(alias, cols, config)

    return Product;
}
