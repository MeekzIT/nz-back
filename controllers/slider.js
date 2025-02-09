const { Slider } = require("../models");

// Create a new slider
const createSlider = async (req, res) => {
  try {
    const slider = await Slider.create(req.body);
    res.status(201).json({ success: true, slider });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all sliders
const getAllSliders = async (req, res) => {
  try {
    const sliders = await Slider.findAll();
    res.json({ success: true, sliders });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single slider by ID
const getSliderById = async (req, res) => {
  try {
    const slider = await Slider.findByPk(req.params.id);
    if (!slider) {
      return res
        .status(404)
        .json({ success: false, error: "Slider not found" });
    }
    res.json({ success: true, slider });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a slider by ID
const updateSlider = async (req, res) => {
  try {
    const slider = await Slider.findByPk(req.params.id);
    if (!slider) {
      return res
        .status(404)
        .json({ success: false, error: "Slider not found" });
    }
    await slider.update(req.body);
    res.json({ success: true, slider });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a slider by ID
const deleteSlider = async (req, res) => {
  try {
    const slider = await Slider.findByPk(req.params.id);
    if (!slider) {
      return res
        .status(404)
        .json({ success: false, error: "Slider not found" });
    }
    await slider.destroy();
    res
      .status(204)
      .json({ success: true, message: "Slider deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createSlider,
  getAllSliders,
  getSliderById,
  updateSlider,
  deleteSlider,
};
