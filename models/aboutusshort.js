'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AboutUsShort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AboutUsShort.init({
    textAm: DataTypes.STRING,
    textAm: DataTypes.STRING,
    textRu: DataTypes.STRING,
    textEn: DataTypes.STRING,
    image_1: DataTypes.STRING,
    image_2: DataTypes.STRING,
    image_3: DataTypes.STRING,
    image_4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AboutUsShort',
  });
  return AboutUsShort;
};