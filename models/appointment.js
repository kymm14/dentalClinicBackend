"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      //////
    }
  }
  Appointment.init(
    {
      id_doctors: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_patients: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
