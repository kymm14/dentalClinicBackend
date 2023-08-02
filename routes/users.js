const express = require("express");
const userController = require("../controllers/users");
const verifyToken = require("../middelwares/verifyToken");
const router = express.Router();

// GET
router.get("/profile", verifyToken, userController.getMyProfile);
router.get("/appointments", verifyToken, userController.getAppointment);
router.get("/doctors", verifyToken, userController.getDoctors);

// PUT
router.put("/update", verifyToken, userController.updateMyProfile);

// POST
router.post("/appointment", verifyToken, userController.getAppointmentById);
router.post("/create/appointment", verifyToken, userController.createAppointment);

// DELETE
router.delete("/delete/appointment", verifyToken, userController.deleteAppointment);

router.put("/update/appointment/:id", verifyToken, userController.modifyAppointment);

module.exports = router;
