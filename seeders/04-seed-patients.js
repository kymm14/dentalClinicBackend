"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("patients", [
      {
        id_user: 5, // 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_user: 6, // 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_user: 7, // 3
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_user: 8, // 4
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_user: 9, // 5
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id_user: 10, // 6
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 11, // 7
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 12, // 8
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 13, // 9
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 14, // 10
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 15, // 11
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 16, // 12
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 17, // 13
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_user: 18, // 14
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
