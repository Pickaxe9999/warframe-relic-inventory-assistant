const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Relic extends Model{}

Relic.init(
    {
        //table reference
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
          //ex C7 in relic LithC7
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
          //Relic class ex- Lith, Meso, Requiem, etc
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        common: {
            type: DataTypes.JSON
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Relic'
    }
)

module.exports = Relic;