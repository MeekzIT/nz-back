"use strict";
const data = require("../mock/about");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AboutUs", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AboutUs", null, {});
  },
};
