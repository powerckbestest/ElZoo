

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Animal, {foreignKey: 'animalId'})
    }
  }
  Picture.init({
    img: DataTypes.STRING,
    animalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};