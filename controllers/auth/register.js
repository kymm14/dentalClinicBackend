const bcrypt = require("bcrypt");
const { Patient, User } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");

module.exports = async (req, res) => {
  const { name, last_name, email, password, birthday } = req.body;

  if (password.lenght < 8) {
    return res.status(400).json({
      status: "Error",
      message: errorMsg.user.PASSWORDLEN,
    });
  }

  try {
    const hash = bcrypt.hashSync(password, 10);

    const newUser = {
      name,
      last_name,
      email,
      password: hash,
      birthday,
      id_role: 2, // role = user / patient
    };

    const user = await User.create(newUser);

    const newPatient = {
      id_user: user.id,
    };

    const patient = await Patient.create(newPatient);

    res.status(201).json({
      message: successMsg.user.CREATE,
    });
  } catch (error) {
    console.log(error.name);

    const statusCode =
      error.name == "SequelizeUniqueConstraintError" ||
      error.name == "SequelizeValidationError"
        ? 400
        : 500;

    res.status(statusCode).json({
      status: "Error",
      message: errorMsg.user.CREATE,
    });
  }
};
