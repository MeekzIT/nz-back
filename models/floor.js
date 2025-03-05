"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Floor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Floor.init(
    {
      floor: DataTypes.INTEGER,
      order: DataTypes.INTEGER,
      image_scheme: DataTypes.STRING,
      width: DataTypes.STRING,
      height: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Floor",
    }
  );

  let Appartement = sequelize.define("Appartement");
  Floor.hasMany(Appartement, {
    foreignKey: "floorId",
  });
  return Floor;
};
