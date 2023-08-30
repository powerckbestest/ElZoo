

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Picture, {foreignKey: 'animalId'})
    }
  }
  Animal.init({
    name: DataTypes.STRING,
    nick: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};