const express = require("express");
const router = express.Router();
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const doctorRouter = require("./routes/doctor");

// home page
router.use("/", indexRouter);

// authentication
router.use("/auth", authRouter);

// admin
router.use("/api/admin", adminRouter);

// users
router.use("/api/users", usersRouter);

// doctor
router.use("/api/doctor", doctorRouter);

module.exports = router;
