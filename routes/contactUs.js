const express = require("express");
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactUs");
const authMiddleware = require("../middlewares/adminAuthMiddleware");

/**
 * @swagger
 * /contact-us:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contact-us]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created successfully
 */
router.post("/", createContact);

/**
 * @swagger
 * /contact-us:
 *   get:
 *     summary: Get all contacts
 *     tags: [Contact-us]
 *     responses:
 *       200:
 *         description: List of all contacts
 */
router.get("/", authMiddleware, getAllContacts);

/**
 * @swagger
 * /contact-us/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     tags: [Contact-us]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contact details
 *       404:
 *         description: Contact not found
 */
router.get("/:id", authMiddleware, getContactById);

/**
 * @swagger
 * /contact-us/edit/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     tags: [Contact-us]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       404:
 *         description: Contact not found
 */
router.put("/edit/:id", authMiddleware, updateContact);

/**
 * @swagger
 * /contact-us/destroy/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     tags: [Contact-us]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       404:
 *         description: Contact not found
 */
router.delete("/destroy/:id", authMiddleware, deleteContact);

module.exports = router;
