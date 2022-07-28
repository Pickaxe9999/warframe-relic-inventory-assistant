const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model{}

Item.init(
    {
        //Table reference
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //name of the object such as Prime Rhino Chassis Blueprint
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //reference for the webpage to load 
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Item'
    }
)

module.exports = Item;