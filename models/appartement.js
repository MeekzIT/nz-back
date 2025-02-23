"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appartement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appartement.init(
    {
      in_stock: DataTypes.BOOLEAN,
      price: DataTypes.STRING,
      floorId: DataTypes.INTEGER,
      room_count: DataTypes.STRING,
      square_meter: DataTypes.STRING,
      image_black_white: DataTypes.STRING,
      image_design: DataTypes.STRING,
      coordinates: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Appartement",
    }
  );
  let Floor = sequelize.define("Floor");
  let AppartementData = sequelize.define("AppartementData");
  Appartement.belongsTo(Floor, {
    foreignKey: "id",
  });

  Appartement.hasMany(AppartementData, {
    foreignKey: "appartementId",
  });
  return Appartement;
};
