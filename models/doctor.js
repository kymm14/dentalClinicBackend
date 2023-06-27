"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      // Doctor {01}--{1} User
      Doctor.belongsTo(models.User, {
        as: "user",
        foreignKey: "id_user", // foreignKey de Doctor
      });

      // Doctor {1}--{1..n} Patient
      // Doctor.hasMany(models.Patient, {
      //   as: "patients",
      //   foreignKey: "id_patient", // foreignKey en Doctors
      // });

      // Doctor {0..n}--{1..n} Patient
      Doctor.belongsToMany(models.Patient, {
        through: "appointments",
        foreignKey: "id_doctors", // foreignKey en Appointment
      });
    }
  }
  Doctor.init(
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Doctor",
      tableName: "doctors",
    }
  );
  return Doctor;
};
