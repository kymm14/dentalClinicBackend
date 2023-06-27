const userController = {};

userController.updateMyProfile = require("./updateMyProfile");
userController.getMyProfile = require("./getMyProfile");
userController.getAppointment = require("./getAppointment");
userController.deleteAppointment = require("./deleteAppointment");
userController.modifyAppointment = require("./modifyAppointment");
userController.createAppointment = require("./createAppointment");

module.exports = userController;
