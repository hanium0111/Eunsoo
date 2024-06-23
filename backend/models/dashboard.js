const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dashboard = sequelize.define('Dashboard', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ProjectName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  projectPath: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  like: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    unique: false
  },

  publish: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  websiteType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  features: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mood: {
    type: DataTypes.STRING,
    allowNull: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Dashboard;
