const bcrypt = require("bcrypt");
const { successMsg, errorMsg } = require("../../_utils/messages");
const { User } = require("../../models");

module.exports = async (req, res) => {
  const { userId, userRole, roleId } = req;
  try {
    const modify = {
      ...req.body,
      password: req.body.password
        ? bcrypt.hashSync(req.body.password, 10)
        : undefined,
      id_role: roleId,
    };

    await User.update(modify, { where: { id: userId } });
    res.status(200).json({
      message: successMsg.user.UPDATE,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.user.UPDATE,
    });
    console.log(error);
  }
};
