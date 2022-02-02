module.exports = (sequelize, dataTypes) => {
    let alias = "Subcategories";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: dataTypes.VARCHAR(45),
            allowNull: false
        },
        categoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
    }
    const config = {
        tableName: "subcategories"
    }

    const Subcategories = sequelize.define(alias, cols, config)

    return Subcategories;
}