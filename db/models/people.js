

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Tafiff, {foreignKey: 'peopleId'})
    }
  }
  People.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};