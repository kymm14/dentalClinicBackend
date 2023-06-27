("use strict");
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          role: "admin", // 1
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "patient", // 2
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "doctor", // 3
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", {
      [Op.or]: [{ role: "admin" }, { role: "patient" }, { role: "doctor" }],
    });
  },
};
