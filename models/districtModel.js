
const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');

const Districts = sequelize.define('district_master', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  district_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  udise_district_code: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  udise_state_code: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  state_id: {
    type: DataTypes.INTEGER, 
    allowNull: false
  },
  district_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  inityear: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Define additional model options here
  tableName: 'district_master', 
  timestamps:false
});

module.exports = Districts;
