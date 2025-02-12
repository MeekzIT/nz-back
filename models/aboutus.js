"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AboutUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AboutUs.init(
    {
      textAm_1: DataTypes.STRING(1234),
      textRu_1: DataTypes.STRING(1234),
      textEn_1: DataTypes.STRING(1234),
      image_11: DataTypes.STRING(1234),
      image_12: DataTypes.STRING(1234),
      image_13: DataTypes.STRING(1234),
      image_14: DataTypes.STRING(1234),
      textAm_2: DataTypes.STRING(1234),
      textRu_2: DataTypes.STRING(1234),
      textEn_2: DataTypes.STRING(1234),
      image_21: DataTypes.STRING(1234),
      image_22: DataTypes.STRING(1234),
      image_23: DataTypes.STRING(1234),
      image_24: DataTypes.STRING(1234),
    },
    {
      sequelize,
      modelName: "AboutUs",
    }
  );
  return AboutUs;
};
