// models/State.js

const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');

const State = sequelize.define('State', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  state_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  state_code: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  state_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  inityear: {
    type: DataTypes.STRING, // Assuming it's stored as a string for simplicity
    allowNull: false
  },
  year_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Define additional model options here
  tableName: 'state_master', // Specify the actual table name
  timestamps: false // Disable timestamps (createdAt, updatedAt)
});

module.exports = State;
