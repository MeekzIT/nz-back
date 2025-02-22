const { ContactUs } = require("../models");

// Create a new contact entry
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, message } = req.body;
    const newContact = await ContactUs.create({
      firstName,
      lastName,
      phone,
      email,
      message,
      isReaded: false,
    });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all contact entries
const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactUs.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single contact entry by ID
const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await ContactUs.findByPk(id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a contact entry by ID
const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, phone, email, message } = req.body;
    const contact = await ContactUs.findByPk(id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    await contact.update({ firstName, lastName, phone, email, message });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a contact entry by ID
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await ContactUs.findByPk(id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    await contact.destroy();
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
