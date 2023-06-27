const doctorController = {};

doctorController.getAppointment = require("./getAppointment");
doctorController.getPatients = require("./getPatients");
doctorController.getMyProfile = require("./getMyProfile");

module.exports = doctorController;
