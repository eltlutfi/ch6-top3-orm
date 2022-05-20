'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Articels.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Articels',
  });
  return Articels;
};