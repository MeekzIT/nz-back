const { Bid } = require("../models");

// Create a new Bid
const createBid = async (req, res) => {
  try {
    const bid = await Bid.create(req.body);
    res.status(201).json(bid);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Bids
const getAllBids = async (req, res) => {
  try {
    const bids = await Bid.findAll();
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Bid by ID
const getBidById = async (req, res) => {
  try {
    const bid = await Bid.findByPk(req.params.id);
    if (!bid) {
      return res.status(404).json({ message: "Bid not found" });
    }
    res.status(200).json(bid);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Bid by ID
const updateBid = async (req, res) => {
  try {
    const bid = await Bid.findByPk(req.params.id);
    if (!bid) {
      return res.status(404).json({ message: "Bid not found" });
    }
    await bid.update(req.body);
    res.status(200).json(bid);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Bid by ID
const deleteBid = async (req, res) => {
  try {
    const bid = await Bid.findByPk(req.params.id);
    if (!bid) {
      return res.status(404).json({ message: "Bid not found" });
    }
    await bid.destroy();
    res.status(200).json({ message: "Bid deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBid,
  getAllBids,
  getBidById,
  updateBid,
  deleteBid,
};
