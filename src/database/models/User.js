//Aca se define la tabla USERS donde se definen los modelos con sus tablas

module.exports = (sequelize, dataTypes) => {
    // El nombre con el cual llamaremos al modelo 'alias'
    const alias = "User";

    //aca van las columnas de la tabla
    const cols = {
        id: {
            //Va a aceptar 11 hasta caracteres unsigned
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
            unique: true,
        }, 

        pass: {
            type: dataTypes.STRING(70),
            allowNull: false,
        }, 

        phone: {
            type: dataTypes.STRING(70),            
        }, 

        rol:{

            type: dataTypes.INTEGER(2).UNSIGNED,
            allowNull: false,            
        },

        avatar: {
            type: dataTypes.STRING(100)
        }


    }
}

// Conectamos la tabla 
const config = {
    tableName: 'users',

}

const User = sequelize.define(alias, cols, config)

//---------------- Relaciones----------------+
User.associate = (models) => {
    User.hasMany(models.Address, { //User tiene muchas direcciones
        as: 'addresses', // Del usuario trae sus direcciones
        foreignKey: 'userId' //La pk de la tabla a conectar
    }) 
    User.hasOne(models.Order, {
        as: 'order',
        foreignKey: 'userId'
    })
}


// ---------------------
return User


//BelongsTo> Pertenece a un 
//HasOne> 