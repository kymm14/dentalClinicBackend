const { successMsg, errorMsg } = require("../../_utils/messages");
const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const createAppointment = { ...req.body };

    await Appointment.create(createAppointment);

    res.status(200).json({
      message: successMsg.appointment.CREATE,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.appointment.CREATE,
    });
  }
};
