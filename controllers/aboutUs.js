const { AboutUs } = require("../models");

// Create a new AboutUs entry
exports.createAboutUs = async (req, res) => {
  try {
    const aboutUs = await AboutUs.create(req.body);
    res.status(201).json(aboutUs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all AboutUs entries
exports.getAllAboutUs = async (req, res) => {
  try {
    const aboutUsList = await AboutUs.findAll();
    res.status(200).json(aboutUsList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific AboutUs entry by ID
exports.getAboutUsById = async (req, res) => {
  try {
    const aboutUs = await AboutUs.findByPk(req.params.id);
    if (aboutUs) {
      res.status(200).json(aboutUs);
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an AboutUs entry by ID
exports.updateAboutUs = async (req, res) => {
  try {
    const [updated] = await AboutUs.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedAboutUs = await AboutUs.findByPk(req.params.id);
      res.status(200).json(updatedAboutUs);
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an AboutUs entry by ID
exports.deleteAboutUs = async (req, res) => {
  try {
    const deleted = await AboutUs.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
