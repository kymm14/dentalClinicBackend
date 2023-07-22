const { errorMsg, successMsg } = require("../../_utils/messages");
const { Patient, Appointment, Doctor, User } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const patient = await Patient.findOne({
      where: { id_user: userId },
    });

    const appointments = await Appointment.findAll({
      where: { id_patient: patient.id },
      attributes: {
        exclude: ["id_doctor", "id_patient", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Patient,
          as: "patient",
          attributes: { exclude: ["id", "id_user", "createdAt", "updatedAt"] },
        },
        {
          model: Doctor,
          as: "doctor",
          attributes: ["id"],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["name", "last_name"],
            },
          ],
        },
      ],
    });

    const filteredAppointment = appointments.map((a) => {
      return {
        date: a.date,
        time: a.time,
        doctor: {
          name: a.doctor.user.name,
          lastName: a.doctor.user.last_name,
        },
      };
    });

    res.status(200).json(filteredAppointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.appointment.GETONE,
      error,
    });
  }
};
