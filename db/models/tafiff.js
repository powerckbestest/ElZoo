

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tafiff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.People, {foreignKey: 'peopleId'})
     this.belongsTo(models.Day, {foreignKey: 'dayId'})
    }
  }
  Tafiff.init({
    peopleId: DataTypes.INTEGER,
    dayId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tafiff',
  });
  return Tafiff;
};