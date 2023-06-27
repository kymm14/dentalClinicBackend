"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      // Patient {1}--{1..n} Doctors
      Appointment.hasMany(models.Doctor, {
        as: "doctor",
        foreignKey: "id_doctor", // foreignKey en Doctors
      });

      Appointment.hasMany(models.Patient, {
        as: "patient",
        foreignKey: "id_patient", // foreignKey en Doctors
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
