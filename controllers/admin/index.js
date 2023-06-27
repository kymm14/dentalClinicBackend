const adminController = {};

adminController.getAll = require("./getAll");
adminController.getPatients = require("./getPatients");
adminController.getDoctors = require("./getDoctors");
adminController.getById = require("./getById");
adminController.updateProfile = require("./updateProfile");
adminController.deleteAppointment = require("./deleteAppointment");

module.exports = adminController;
