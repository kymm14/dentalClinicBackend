"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("appointments", [
      {
        id_doctor: 1,
        id_patient: 1,
        date: "2023-06-18",
        time: "14:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctor: 1,
        id_patient: 2,
        date: "2023-06-20",
        time: "13:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctor: 2,
        id_patient: 3,
        date: "2023-07-10",
        time: "16:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_doctor: 2,
        id_patient: 4,
        date: "2023-08-18",
        time: "15:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctor: 3,
        id_patient: 5,
        date: "2023-07-25",
        time: "14:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctor: 3,
        id_patient: 6,
        date: "2023-07-04",
        time: "13:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_doctor: 3,
        id_patient: 1,
        date: "2023-08-18",
        time: "15:00",
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
