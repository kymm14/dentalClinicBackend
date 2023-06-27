"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("appointments", [
      {
        id_doctors: 1,
        id_patients: 1,
        date: "2023-06-18",
        time: "14:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctors: 1,
        id_patients: 2,
        date: "2023-06-20",
        time: "13:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctors: 2,
        id_patients: 3,
        date: "2023-07-10",
        time: "16:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_doctors: 2,
        id_patients: 4,
        date: "2023-08-18",
        time: "15:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctors: 3,
        id_patients: 5,
        date: "2023-07-25",
        time: "14:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctors: 3,
        id_patients: 6,
        date: "2023-07-04",
        time: "13:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
