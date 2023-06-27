"use strict";
const bcrypt = require("bcrypt");

const password = "12345678";
const encryptedPassword = bcrypt.hashSync(password, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Yonetzy", // 1
          last_name: "Moreno",
          birthday: "1999-09-14",
          email: "admin@admin.com",
          password: encryptedPassword,
          id_role: 1, // admin
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Fabrizzio", // 2
          last_name: "Bongiorno",
          birthday: "1998-11-03",
          email: "fabrizzio@bongiorno.com",
          password: encryptedPassword,
          id_role: 3, // doctor
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Laura", // 3
          last_name: "Garcia",
          birthday: "1996-06-05",
          email: "laura@garcia.com",
          password: encryptedPassword,
          id_role: 3, // doctor
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Ernesto", // 4
          last_name: "Perez",
          birthday: "1966-07-23",
          email: "ernest@perez.com",
          password: encryptedPassword,
          id_role: 3, // doctor
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Vicente", //5
          last_name: "Ruiz",
          birthday: "1987-12-31",
          email: "vicente@ruiz.com",
          password: encryptedPassword,
          id_role: 2, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Enrique", //6
          last_name: "Cervantes",
          birthday: "1974-01-15",
          email: "enrique@cervantes.com",
          password: encryptedPassword,
          id_role: 2, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Terry", // 7
          last_name: "Lopez",
          birthday: "2000-12-25",
          email: "terry@lopez.com",
          password: encryptedPassword,
          id_role: 2, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Sheldon", // 8
          last_name: "White",
          birthday: "2003-08-02",
          email: "sheldon@white.com",
          password: encryptedPassword,
          id_role: 2, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Valeria", // 9
          last_name: "Hills",
          birthday: "1992-12-30",
          email: "valeria@hills.com",
          password: encryptedPassword,
          id_role: 2, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          name: "Sofia", // 10
          last_name: "Fernandez",
          birthday: "1969-01-16",
          email: "miles@fernandez.com",
          password: encryptedPassword,
          id_role: 2, // patient
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
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
