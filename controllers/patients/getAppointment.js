// const { errorMsg } = require("../../_utils/messages");
// const { User, Appointment } = require("../../models");

// const models = require("../../models/index");

// module.exports = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const appointments = await Appointment.findAll({
//       where: (id_patients = id),
//     });

//     console.log(appointments);
//     res.status(200).json(appointments, {
//       message: "Dates of your appointment",
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "Error",
//       message: error.message,
//     });
//   }
// };
