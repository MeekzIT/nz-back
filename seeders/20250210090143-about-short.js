"use strict";
const data = require("../mock/aboutShort");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AboutUsShorts", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AboutUsShorts", null, {});
  },
};
