
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// added require express and the router hope i did it right 
const express = require('express');
const router = express.Router();

class SavedGift extends Model {}


SavedGift.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    relationship: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.STRING,
    },
    event_id: {
        type: DataTypes.INTEGER,
    },
    user_id: {  
        type: DataTypes.INTEGER,
    },
    gift_id: {
        type: DataTypes.INTEGER,
    },
   
  },


    
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'savedgift',
  }
);


module.exports = { SavedGift, router };