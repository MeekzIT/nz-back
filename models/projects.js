'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    titleAm: DataTypes.STRING,
    titleRu: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    textAm_1: DataTypes.STRING,
    textRu_1: DataTypes.STRING,
    textEn_1: DataTypes.STRING,
    image_11: DataTypes.STRING,
    image_12: DataTypes.STRING,
    image_13: DataTypes.STRING,
    image_14: DataTypes.STRING,
    textAm_2: DataTypes.STRING,
    textRu_2: DataTypes.STRING,
    textEn_2: DataTypes.STRING,
    image_21: DataTypes.STRING,
    image_22: DataTypes.STRING,
    image_23: DataTypes.STRING,
    image_24: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};