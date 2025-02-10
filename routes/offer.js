const { Router } = require("express");
const {
  createOffer,
  getAllOffers,
  getOfferById,
  updateOffer,
  deleteOffer,
} = require("../controllers/offer");

const authMiddleware = require("../middlewares/adminAuthMiddleware"); // Optional authentication middleware

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Offers
 *   description: Offer management
 */

/**
 * @swagger
 * /offers:
 *   post:
 *     summary: Create a new offer
 *     tags: [Offers]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 example: "https://example.com/image.jpg"
 *     responses:
 *       201:
 *         description: Successfully created offer
 *       500:
 *         description: Failed to create offer
 */
router.post("/offers", authMiddleware, createOffer);

/**
 * @swagger
 * /offers:
 *   get:
 *     summary: Get all offers
 *     tags: [Offers]
 *     responses:
 *       200:
 *         description: Successfully retrieved offers
 *       500:
 *         description: Failed to fetch offers
 */
router.get("/offers", getAllOffers);

/**
 * @swagger
 * /offers/{id}:
 *   get:
 *     summary: Get an offer by ID
 *     tags: [Offers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Successfully retrieved offer
 *       404:
 *         description: Offer not found
 *       500:
 *         description: Failed to fetch offer
 */
router.get("/offers/:id", getOfferById);

/**
 * @swagger
 * /offers/{id}:
 *   put:
 *     summary: Update an offer by ID
 *     tags: [Offers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 example: "https://example.com/new-image.jpg"
 *     responses:
 *       200:
 *         description: Successfully updated offer
 *       404:
 *         description: Offer not found
 *       500:
 *         description: Failed to update offer
 */
router.put("/offers/:id", authMiddleware, updateOffer);

/**
 * @swagger
 * /offers/{id}:
 *   delete:
 *     summary: Delete an offer by ID
 *     tags: [Offers]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       204:
 *         description: Successfully deleted offer
 *       404:
 *         description: Offer not found
 *       500:
 *         description: Failed to delete offer
 */
router.delete("/offers/:id", authMiddleware, deleteOffer);

module.exports = router;
