"use strict";
const data = require("../mock/appartement");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Appartements", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Appartements", null, {});
  },
};
