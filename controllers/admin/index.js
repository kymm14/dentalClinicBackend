const adminController = {};

adminController.getAll = require("./getAll");
adminController.getById = require("./getById");
adminController.getProfile = require("./getProfile");
adminController.getDoctors = require("./getDoctors");
adminController.getPatients = require("./getPatients");
adminController.updateProfile = require("./updateProfile");

module.exports = adminController;
