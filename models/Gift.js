const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gift extends Model {}


Gift.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    item: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    },
    productURL: {
        type: DataTypes.STRING,
    },
    productImage: {
        type: DataTypes.STRING,
    },
    gift_category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
    },
    age_min: {
        type: DataTypes.INTEGER,
    },
    age_max: {  
        type: DataTypes.INTEGER,
    },
    relationship_type: {
        type: DataTypes.STRING,
    },
   
  },


    
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gift',
  }
);

module.exports = Gift;