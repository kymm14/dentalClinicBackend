const { errorMsg, successMsg } = require("../../_utils/messages");
const { User, Doctor, Patient, Appointment } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.body;

  try {
    const appointment = await Appointment.findByPk(id, {
      attributes: {
        exclude: ["id_doctor", "id_patient", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Doctor,
          as: "doctor",
          attributes: {
            exclude: ["id", "id_role", "createdAt", "updatedAt"],
          },
          include: [
            {
              model: User,
              as: "user",
              attributes: {
                exclude: [
                  "id",
                  "id_role",
                  "password",
                  "birthday",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
          ],
        },
      ],
    });

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: errorMsg.appointment.GETONE,
      error,
    });
  }
};
