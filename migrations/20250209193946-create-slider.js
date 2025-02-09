"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sliders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      mobile_image: {
        type: Sequelize.STRING,
      },
      titleAm: {
        type: Sequelize.STRING,
      },
      titleRu: {
        type: Sequelize.STRING,
      },
      titleEn: {
        type: Sequelize.STRING,
      },
      subTitleAm: {
        type: Sequelize.STRING,
      },
      subTitleRu: {
        type: Sequelize.STRING,
      },
      subTitleEn: {
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
    await queryInterface.dropTable("Sliders");
  },
};
