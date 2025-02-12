"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AboutUs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      textAm_1: {
        type: Sequelize.STRING(1234),
      },
      textRu_1: {
        type: Sequelize.STRING(1234),
      },
      textEn_1: {
        type: Sequelize.STRING(1234),
      },
      image_11: {
        type: Sequelize.STRING,
      },
      image_12: {
        type: Sequelize.STRING(1234),
      },
      image_13: {
        type: Sequelize.STRING(1234),
      },
      image_14: {
        type: Sequelize.STRING(1234),
      },
      textAm_2: {
        type: Sequelize.STRING(1234),
      },
      textRu_2: {
        type: Sequelize.STRING(1234),
      },
      textEn_2: {
        type: Sequelize.STRING(1234),
      },
      image_21: {
        type: Sequelize.STRING(1234),
      },
      image_22: {
        type: Sequelize.STRING(1234),
      },
      image_23: {
        type: Sequelize.STRING(1234),
      },
      image_24: {
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
    await queryInterface.dropTable("AboutUs");
  },
};
