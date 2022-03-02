module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        }, 
        email: {
            type: dataTypes.STRING(60),
            allowNull: false,
            unique: true
        }, 
        pass: {
            type: dataTypes.STRING(70),
            allowNull: false,
        },  
        phone: {
            type: dataTypes.STRING(30),
        },
        rol: {
            type: dataTypes.INTEGER(2).UNSIGNED,
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100), 
        }

    }

    const config = {
        tableName: 'users',
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        User.hasMany(models.Address, {
            as: 'addresses',
            foreignKey: 'userId',
        })
        User.hasOne(models.Order, {
            as: 'order',
            foreignKey: 'userId'
        })
        User.hasMany(models.UserLikes, {
            as: 'likes',
            foreignKey: 'userId'
        })
    }

    return User
} 