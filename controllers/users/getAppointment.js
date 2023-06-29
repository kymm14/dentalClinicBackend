const { errorMsg, successMsg } = require("../../_utils/messages");
const { Patient, Appointment } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const patient = await Patient.findOne({
      where: { id_user: userId },
    });

    const newAppointment = await Appointment.findAll({
      where: { id_patient: patient.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).json(newAppointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.appointment.GETONE,
    });
  }
};
