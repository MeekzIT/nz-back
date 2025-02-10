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
        type: Sequelize.STRING,
      },
      textAm: {
        type: Sequelize.STRING,
      },
      textRu: {
        type: Sequelize.STRING,
      },
      textEn: {
        type: Sequelize.STRING,
      },
      image_1: {
        type: Sequelize.STRING,
      },
      image_2: {
        type: Sequelize.STRING,
      },
      image_3: {
        type: Sequelize.STRING,
      },
      image_4: {
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
    await queryInterface.dropTable("AboutUsShorts");
  },
};
