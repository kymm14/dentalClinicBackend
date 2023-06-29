const express = require("express");
const userController = require("../controllers/users");
const verifyToken = require("../middelwares/verifyToken");
const router = express.Router();

// GET
router.get("/profile", verifyToken, userController.getMyProfile);
router.get("/appointments", verifyToken, userController.getAppointment);

// PUT
router.put("/update", verifyToken, userController.updateMyProfile);
router.put("/create/appointment", verifyToken, userController.createAppointment);

// DELETE
router.delete("/delete", verifyToken, userController.deleteAppointment);

router.put("/update/appointment/:id", verifyToken, userController.modifyAppointment);
module.exports = router;
