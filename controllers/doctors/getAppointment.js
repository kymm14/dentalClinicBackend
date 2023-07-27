const { errorMsg } = require("../../_utils/messages");
const { Appointment, Doctor, Patient, User } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;

  try {
    const doctor = await Doctor.findOne({ where: { id_user: userId } });

    const appointment = await Appointment.findAll({
      where: { id_doctor: doctor.id },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "id_role"],
      },
      include: [
        {
          model: Patient,
          as: "patient",
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

    const filteredAppointmentDoctor = appointment.map((a) => {
      return {
        date: a.date,
        time: a.time,
        patient: {
          name: a.patient.user.name,
          lastName: a.patient.user.last_name,
        },
      };
    });

    res.status(200).json(filteredAppointmentDoctor);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.appointment.GETALL,
    });
  }
};
