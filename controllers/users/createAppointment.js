const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const createAppointment = { ...req.body };

    await Appointment.create(createAppointment);

    res.status(200).json({
      message: "Appointment created successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
