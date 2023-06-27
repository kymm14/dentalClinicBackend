const express = require("express");
const adminController = require("../controllers/admin");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");
const router = express.Router();

/* GET users listing. */
router.get("/users", verifyToken, isAdmin, adminController.getAll);
router.get("/profile", verifyToken, isAdmin, adminController.getProfile);
router.get("/doctors", verifyToken, isAdmin, adminController.getDoctors);
router.get("/patients", verifyToken, adminController.getPatients);
router.get("/:id", verifyToken, isAdmin, adminController.getById);

// /* PUT users listing */
router.put("/profile/update/:id", verifyToken, isAdmin, adminController.updateProfile);

module.exports = router;
