module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
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
    }
    
    let config = {
        tableName: "categories"
    }

    const Categories = sequelize.define(alias, cols, config)

    return Categories;
}
