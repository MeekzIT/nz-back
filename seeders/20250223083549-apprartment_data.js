"use strict";
const data = require("../mock/appartementdata");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AppartementData", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AppartementData", null, {});
  },
};
