const { errorMsg } = require("../../_utils/messages");
const { User } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const users = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.user.GETONE,
    });
  }
};
