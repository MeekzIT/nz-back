"use strict";
const { Model } = require("sequelize");
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
  AboutUsShort.init(
    {
      textAm: DataTypes.STRING(1234),
      textAm: DataTypes.STRING(1234),
      textRu: DataTypes.STRING(1234),
      textEn: DataTypes.STRING(1234),
      image_1: DataTypes.STRING(1234),
      image_2: DataTypes.STRING(1234),
      image_3: DataTypes.STRING(1234),
      image_4: DataTypes.STRING(1234),
    },
    {
      sequelize,
      modelName: "AboutUsShort",
    }
  );
  return AboutUsShort;
};
