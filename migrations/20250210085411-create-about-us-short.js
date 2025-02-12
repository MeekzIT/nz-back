"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AboutUsShorts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      textAm: {
        type: Sequelize.STRING(1234),
      },
      textAm: {
        type: Sequelize.STRING(1234),
      },
      textRu: {
        type: Sequelize.STRING(1234),
      },
      textEn: {
        type: Sequelize.STRING(1234),
      },
      image_1: {
        type: Sequelize.STRING(1234),
      },
      image_2: {
        type: Sequelize.STRING(1234),
      },
      image_3: {
        type: Sequelize.STRING(1234),
      },
      image_4: {
        type: Sequelize.STRING(1234),
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
    await queryInterface.dropTable("AboutUsShorts");
  },
};
