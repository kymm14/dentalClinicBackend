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

      // Patient {0..n}--{1..n} Appointments
      Patient.belongsToMany(models.Appointment, {
        through: "appointments",
        foreignKey: "id_patient", // foreignKey en Appointments
      });
    }
  }
  Patient.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
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
