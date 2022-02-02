module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
      id: {
          type: dataTypes.INTEGER(11).UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
      },
          name: {
              type: dataTypes.VARCHAR(80),
              allowNull:false,
          },
          last_name: {
            type: dataTypes.VARCHAR(80),
            allowNull:false,
          },
          email: {
            type: dataTypes.VARCHAR(70),
            allowNull:false,
            unique: true
          },
          pass: {
            type: dataTypes.VARCHAR(60),
            allowNull:false,
          },
          phone: {
            type: dataTypes.VARCHAR(45).NULL
          },
          rol: {
            
          },
          avatar: {
            type: dataTypes.VARCHAR(100).NULL
          }
    }

    const config = {
        tableName: 'users'
    }

    const User = sequelize.define(alias, cols, config)

    return User
}