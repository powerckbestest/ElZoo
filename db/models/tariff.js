'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tariff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tariff.init({
    peopleId: DataTypes.INTEGER,
    dayId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tariff',
  });
  return Tariff;
};