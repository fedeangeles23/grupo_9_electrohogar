module.exports = (sequelize, dataTypes) => {
    let alias = "ProductImage";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        image: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        col_61: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
    }
    const config = {
        tableName: "products_images"
    }

    const ProductImage = sequelize.define(alias, cols, config)

    return ProductImage;
}