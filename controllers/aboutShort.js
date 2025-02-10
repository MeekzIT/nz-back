const { AboutUsShort } = require("../models");

// Create a new record
exports.createAboutUsShort = async (req, res) => {
  try {
    const aboutUsShort = await AboutUsShort.create(req.body);
    res.status(201).json(aboutUsShort);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all records
exports.getAllAboutUsShort = async (req, res) => {
  try {
    const aboutUsShorts = await AboutUsShort.findAll();
    res.status(200).json(aboutUsShorts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single record by ID
exports.getAboutUsShortById = async (req, res) => {
  try {
    const aboutUsShort = await AboutUsShort.findByPk(req.params.id);
    if (!aboutUsShort) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(200).json(aboutUsShort);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a record by ID
exports.updateAboutUsShort = async (req, res) => {
  try {
    const [updated] = await AboutUsShort.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Record not found" });
    }
    const updatedRecord = await AboutUsShort.findByPk(req.params.id);
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a record by ID
exports.deleteAboutUsShort = async (req, res) => {
  try {
    const deleted = await AboutUsShort.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
