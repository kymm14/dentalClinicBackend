"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      // Patient {01}--{1} User
      Patient.belongsTo(models.User, {
        as: "user",
        foreignKey: "id_user", // foreignKey de Patient
      });

      // // Patient {1}--{1..n} Doctors
      // Patient.hasMany(models.Doctors, {
      //   as: "doctors",
      //   foreignKey: "id_doctor", // foreignKey en Doctors
      // });

      // Patient {0..n}--{1..n} Appointments
      Patient.belongsToMany(models.Doctor, {
        through: "appointments",
        foreignKey: "id_patients", // foreignKey en Appointments
      });
    }
  }
  Patient.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Patient",
      tableName: "patients",
    }
  );
  return Patient;
};
