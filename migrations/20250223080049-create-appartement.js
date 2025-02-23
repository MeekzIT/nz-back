"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Appartements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      in_stock: {
        type: Sequelize.BOOLEAN,
      },
      price: {
        type: Sequelize.STRING,
      },
      floorId: {
        type: Sequelize.INTEGER,
      },
      room_count: {
        type: Sequelize.STRING,
      },
      square_meter: {
        type: Sequelize.STRING,
      },
      image_black_white: {
        type: Sequelize.STRING,
      },
      image_design: {
        type: Sequelize.STRING,
      },
      coordinates: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Appartements");
  },
};
