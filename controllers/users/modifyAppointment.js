const { Appointment } = require("../../models");

module.exports = async (req, res) => {
  const { userId } = req;
  try {
    const modify = { ...req.body };

    await Appointment.update(modify, { where: { id: userId } });
    res.status(200).json({
      message: "Modified successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
