const { Floor, Appartement, AppartementData } = require("../models");

const getAll = async (req, res) => {
  try {
    const floor = await Floor.findAll({
      include: [
        {
          model: Appartement,
          include: [{ model: AppartementData }],
        },
      ],
    });
    res.status(200).json(floor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
};
