"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      // Appointment {1}--{1..n} Doctors
      Appointment.belongsTo(models.Doctor, {
        as: "doctor",
        foreignKey: "id_doctor", // foreignKey en Doctor
      });

      // Appointment {1}--{1..n} Patients
      Appointment.belongsTo(models.Patient, {
        as: "patient",
        foreignKey: "id_patient", // foreignKey en Patient
      });
    }
  }
  Appointment.init(
    {
      id_doctor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "doctors",
          key: "id",
        },
      },
      id_patient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "patients",
          key: "id",
        },
      },
      date: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
      time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Appointment",
      tableName: "appointments",
    }
  );
  return Appointment;
};
