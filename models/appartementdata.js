"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AppartementData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AppartementData.init(
    {
      name: DataTypes.STRING,
      value: DataTypes.STRING,
      appartementId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AppartementData",
    }
  );

  let Appartement = sequelize.define("Appartement");
  AppartementData.belongsTo(Appartement, {
    foreignKey: "id",
  });
  return AppartementData;
};
