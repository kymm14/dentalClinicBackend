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

      // Doctor {0..n}--{1..n} Appointments
      Doctor.hasOne(models.Appointment, {
        through: "appointments",
        foreignKey: "id_doctor", // foreignKey en Appointment
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
