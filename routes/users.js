const express = require("express");
const userController = require("../controllers/users");
const verifyToken = require("../middelwares/verifyToken");
const isUser = require("../middelwares/isUser");
const router = express.Router();

/* GET users listing. */
router.get("/profile", verifyToken, isUser, userController.getMyProfile);
router.get("/appointments", verifyToken, isUser, userController.getAppointment);
// router.get("/:id", verifyToken, userController.getProfile);

// /* PUT users listing */
router.put("/update", verifyToken, isUser, userController.updateMyProfile);
router.put("/update/appointment", verifyToken, isUser, userController.modifyAppointment);
router.put("/create/appointment", verifyToken, isUser, userController.createAppointment);

router.delete("/delete", verifyToken, isUser, userController.deleteAppointment);

module.exports = router;
