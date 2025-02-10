"use strict";
const data = require("../mock/projects");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Projects", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Projects", null, {});
  },
};
