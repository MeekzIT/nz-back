'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Slider.init({
    image: DataTypes.STRING,
    mobile_image: DataTypes.STRING,
    titleAm: DataTypes.STRING,
    titleRu: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    subTitleAm: DataTypes.STRING,
    subTitleRu: DataTypes.STRING,
    subTitleEn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Slider',
  });
  return Slider;
};