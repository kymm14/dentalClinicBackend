const express = require("express");
const adminController = require("../controllers/admin");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");
const router = express.Router();

/* GET users listing. */
router.get("/users", verifyToken, isAdmin, adminController.getAll);
router.get("/patients", verifyToken, isAdmin, adminController.getPatients);
router.get("/doctors", verifyToken, isAdmin, adminController.getDoctors);
router.get("/:id", verifyToken, isAdmin, adminController.getById);

// /* PUT users listing */
router.put("/profile/update/:id",verifyToken,isAdmin,adminController.updateProfile);

// Delete appointment
router.delete("/delete", verifyToken, isAdmin, adminController.deleteAppointment);

module.exports = router;
