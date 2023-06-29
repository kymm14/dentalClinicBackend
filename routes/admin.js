const express = require("express");
const adminController = require("../controllers/admin");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");
const router = express.Router();

// GET
router.get("/users", verifyToken, isAdmin, adminController.getAll);
router.get("/users/patients", verifyToken, isAdmin, adminController.getPatients);
router.get("/users/doctors", verifyToken, isAdmin, adminController.getDoctors);
router.get("/users/:id", verifyToken, isAdmin, adminController.getById);

// PUT 
router.put("/update/users/:id",verifyToken,isAdmin,adminController.updateProfile);

// DELETE
router.delete("/delete/appointment", verifyToken, isAdmin, adminController.deleteAppointment);

module.exports = router;
