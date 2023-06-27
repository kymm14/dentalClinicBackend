const express = require("express");
const router = express.Router();
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const patientRouter = require("./routes/patient");

// home page
router.use("/", indexRouter);

// users
router.use("/api/users", usersRouter);

// authentication
router.use("/auth", authRouter);

// admin
router.use("/admin", adminRouter);

// patient
router.use("/patient", patientRouter);

module.exports = router;
