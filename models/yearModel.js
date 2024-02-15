
const { DataTypes } = require('sequelize');
const sequelize = require('../dbconfig');

const yearsData = sequelize.define('yearsData', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  report_year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  // Define additional model options here
  tableName: 'year_master', 
});

module.exports = yearsData;
