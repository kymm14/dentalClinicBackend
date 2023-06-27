const { successMsg, errorMsg } = require("../../_utils/messages");
const { User } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const modify = { ...req.body };

    await User.update(modify, { where: { id: id } });
    res.status(200).json({
      message: successMsg.user.UPDATE,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.user.UPDATE,
    });
  }
};
