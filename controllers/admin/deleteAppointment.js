const { successMsg, errorMsg } = require("../../_utils/messages");
const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  try {
    const appointment = { ...req.body };

    await Appointment.destroy({
      where: { id: appointment.id },
    });
    res.status(200).json({
      message: successMsg.appointment.DELETE,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.appointment.DELETE,
    });
  }
};
