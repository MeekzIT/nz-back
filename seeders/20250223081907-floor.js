"use strict";
const data = require("../mock/floor");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Floors", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Floors", null, {});
  },
};
