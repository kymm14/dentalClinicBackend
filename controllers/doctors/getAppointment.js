const { errorMsg } = require("../../_utils/messages");
const { Appointment, Doctor } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const doctor = await Doctor.findOne({ where: { id_user: userId } });

    const appointment = await Appointment.findAll({
      where: { id_doctor: doctor.id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "id_role"],
      },
    });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.appointment.GETALL,
    });
  }
};
