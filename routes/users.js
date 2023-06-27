const express = require("express");
const userController = require("../controllers/patients");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");
const router = express.Router();

/* GET users listing. */
router.get("/:id", verifyToken, userController.getAppointment);
router.get("/profile", verifyToken, userController.getProfile);

// /* PUT users listing */
router.put("/update", verifyToken, userController.updateProfile);

module.exports = router;
