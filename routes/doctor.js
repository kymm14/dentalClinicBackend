const express = require("express");
const doctorController = require("../controllers/doctors");
const verifyToken = require("../middelwares/verifyToken");
const isDoctor = require("../middelwares/isDoctor");
const router = express.Router();

/* GET users listing. */
router.get("/patients", verifyToken, isDoctor, doctorController.getPatients);
router.get("/appointments", verifyToken, isDoctor, doctorController.getAppointment);
router.get("/profile", verifyToken, isDoctor, doctorController.getMyProfile);

module.exports = router;
