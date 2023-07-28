const { errorMsg } = require("../../_utils/messages");
const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = { ...req.body };

    const appointment = await Appointment.findByPk(id, {
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.user.GETONE,
    });
  }
};
