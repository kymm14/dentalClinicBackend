const { errorMsg } = require("../../_utils/messages");
const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const appointment = await Appointment.findAll({
      where: { id_doctor: userId },
    });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.appointment.GETALL,
    });
  }
};
