"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // User {1..n}--{1} Role
      User.belongsTo(models.Role, {
        as: "role",
        foreignKey: "id_role", // foreignKey de User
      });

      // User {1}..{01} Doctor
      User.hasOne(models.Doctor, {
        as: "doctor",
        foreignKey: "id_user", // foreignKey en Doctor
      });

      // User {1}..{01} Patient
      User.hasOne(models.Patient, {
        as: "patient",
        foreignKey: "id_user", // foreignKey en Patient
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            msg: "Name not valid",
            args: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          },
        },
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            msg: "Last name not valid",
            args: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          },
        },
      },
      birthday: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email not valid",
          },
        },
      },
      password: DataTypes.STRING,
      id_role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
