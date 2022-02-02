module.exports = (sequelize, dataTypes) => {
    let alias = "Adress";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        street: {
            type: dataTypes.VARCHAR(150).NULL
        },
        city: {
            type: dataTypes.VARCHAR(150)
        },
        province: {
            type: dataTypes.VARCHAR(150)
        },
        number: {
            type: dataTypes.INTEGER(11)
        },
        postal_code: {
            type: dataTypes.INTEGER(11)
        },
        userId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
    }
    
    const config = {
        tableName: "adresses"
    }

    const Adress = sequelize.define(alias, cols, config)

    return Adress;
}