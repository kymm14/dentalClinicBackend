const userController = {};

userController.updateMyProfile = require("./updateMyProfile");
userController.getMyProfile = require("./getMyProfile");
userController.getAppointment = require("./getAppointment");
userController.getDoctors = require("./getDoctors");
userController.deleteAppointment = require("./deleteAppointment");
userController.modifyAppointment = require("./modifyAppointment");
userController.createAppointment = require("./createAppointment");
userController.getAppointmentById = require("./getAppointmentById");

module.exports = userController;
