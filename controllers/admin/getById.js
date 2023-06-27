const { errorMsg } = require("../../_utils/messages");
const { User } = require("../../models");

/**
 * Obtener alumno por id.
 * Ejemplo url: [GET] http://localhost:3000/api/alumnos/1
 * @param {*} req    Request object
 * @param {*} res    Response object
 */
module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const users = await User.findByPk(id, {
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "id_role"],
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
