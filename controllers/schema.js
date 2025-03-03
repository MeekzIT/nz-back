const { Floor, Appartement, AppartementData } = require("../models");

const getAll = async (req, res) => {
  try {
    const { id } = req.params;
    const whereCondition = id ? { floor: id } : {};
    const floors = await Floor.findAll({
      where: whereCondition,
      include: [
        {
          model: Appartement,
          include: [{ model: AppartementData }],
        },
      ],
      order: [["order", "ASC"]],
    });

    const baseUrl = `${req.protocol}://${req.get("host")}/images/floor/`;

    const floorsWithImages = floors.map((floor) => ({
      ...floor.toJSON(),
      imageUrl: floor.image_scheme
        ? `${baseUrl}${floor.image_scheme}.png`
        : null,
    }));

    res.status(200).json(floorsWithImages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAppartementCountByFloor = async (req, res) => {
  try {
    const floors = await Floor.findAll({
      include: [
        {
          model: Appartement,
          attributes: ["id", "in_stock"],
          where: { in_stock: true },
        },
      ],
    });

    const result = floors.map((floor) => ({
      floor: floor.floor,
      count: floor.Appartements.length,
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { in_stock, price } = req.body;
    const result = await Appartement.findOne({ id });
    if (!result) {
      return res.status(404).json({ error: "Project not found" });
    }
    await result.update({ in_stock, price });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAppartement = async (req, res) => {
  try {
    const { id } = req.params;

    const floors = await Appartement.findOne({
      where: { id },
      include: [
        {
          model: AppartementData,
        },
      ],
    });

    res.status(200).json(floors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getAppartementCountByFloor,
  edit,
  getAppartement,
};
