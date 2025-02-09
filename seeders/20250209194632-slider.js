"use strict";
const data = require("../mock/slider");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Sliders", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Sliders", null, {});
  },
};
