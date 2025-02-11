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
 * /offer:
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
router.post("/", authMiddleware, createOffer);

/**
 * @swagger
 * /offer:
 *   get:
 *     summary: Get all offers
 *     tags: [Offers]
 *     responses:
 *       200:
 *         description: Successfully retrieved offers
 *       500:
 *         description: Failed to fetch offers
 */
router.get("/", getAllOffers);

/**
 * @swagger
 * /offer/{id}:
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
router.get("/:id", getOfferById);

/**
 * @swagger
 * /offer/edit/{id}:
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
router.put("/edit/:id", authMiddleware, updateOffer);

/**
 * @swagger
 * /offer/destroy/{id}:
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
router.delete("/destroy/:id", authMiddleware, deleteOffer);

module.exports = router;
