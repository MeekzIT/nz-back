const { Offer } = require("../models");
const { Sequelize } = require("sequelize");

// Create a new Offer
const createOffer = async (req, res) => {
  const transaction = await Offer.sequelize.transaction();
  try {
    const { image } = req.body;
    const offer = await Offer.create({ image }, { transaction });

    await transaction.commit();
    res.status(201).json(offer);
  } catch (error) {
    await transaction.rollback();
    res
      .status(500)
      .json({ error: "Failed to create offer", details: error.message });
  }
};

// Get all Offers
const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.findAll();
    res.status(200).json(offers);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch offers", details: error.message });
  }
};

// Get Offer by ID
const getOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const offer = await Offer.findByPk(id);

    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }

    res.status(200).json(offer);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch offer", details: error.message });
  }
};

// Update Offer by ID
const updateOffer = async (req, res) => {
  const transaction = await Offer.sequelize.transaction();
  try {
    const { id } = req.params;
    const { image } = req.body;

    const offer = await Offer.findByPk(id, { transaction });
    if (!offer) {
      await transaction.rollback();
      return res.status(404).json({ error: "Offer not found" });
    }

    await offer.update({ image }, { transaction });
    await transaction.commit();
    res.status(200).json(offer);
  } catch (error) {
    await transaction.rollback();
    res
      .status(500)
      .json({ error: "Failed to update offer", details: error.message });
  }
};

// Delete Offer by ID
const deleteOffer = async (req, res) => {
  const transaction = await Offer.sequelize.transaction();
  try {
    const { id } = req.params;

    const offer = await Offer.findByPk(id, { transaction });
    if (!offer) {
      await transaction.rollback();
      return res.status(404).json({ error: "Offer not found" });
    }

    await offer.destroy({ transaction });
    await transaction.commit();
    res.status(204).send();
  } catch (error) {
    await transaction.rollback();
    res
      .status(500)
      .json({ error: "Failed to delete offer", details: error.message });
  }
};

module.exports = {
  createOffer,
  getAllOffers,
  getOfferById,
  updateOffer,
  deleteOffer,
};
