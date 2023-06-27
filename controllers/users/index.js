const userController = {};

userController.updateMyProfile = require("./updateMyProfile");
userController.getMyProfile = require("./getMyProfile");
userController.getAppointment = require("./getAppointment");
userController.deleteAppointment = require("./deleteAppointment");

module.exports = userController;
