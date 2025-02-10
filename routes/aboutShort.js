const { Router } = require("express");
const {
  createAboutUsShort,
  getAllAboutUsShort,
  getAboutUsShortById,
  updateAboutUsShort,
  deleteAboutUsShort,
} = require("../controllers/aboutShort");
const authMiddleware = require("../middlewares/adminAuthMiddleware");

const router = Router();

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a new About Us Short record
 *     tags: [AboutUsShort]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               textAm:
 *                 type: string
 *               textRu:
 *                 type: string
 *               textEn:
 *                 type: string
 *               image_1:
 *                 type: string
 *               image_2:
 *                 type: string
 *               image_3:
 *                 type: string
 *               image_4:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created
 */
router.post("/create", authMiddleware, createAboutUsShort);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all About Us Short records
 *     tags: [AboutUsShort]
 *     responses:
 *       200:
 *         description: Successfully retrieved records
 */
router.get("/", getAllAboutUsShort);

/**
 * @swagger
 * /single/{id}:
 *   get:
 *     summary: Get a specific About Us Short record by ID
 *     tags: [AboutUsShort]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved record
 *       404:
 *         description: Record not found
 */
router.get("/single/:id", getAboutUsShortById);

/**
 * @swagger
 * /edit/{id}:
 *   put:
 *     summary: Update an About Us Short record by ID
 *     tags: [AboutUsShort]
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
 *               textAm:
 *                 type: string
 *               textRu:
 *                 type: string
 *               textEn:
 *                 type: string
 *               image_1:
 *                 type: string
 *               image_2:
 *                 type: string
 *               image_3:
 *                 type: string
 *               image_4:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated
 *       404:
 *         description: Record not found
 */
router.put("/edit/:id", authMiddleware, updateAboutUsShort);

/**
 * @swagger
 * /destroy/{id}:
 *   delete:
 *     summary: Delete an About Us Short record by ID
 *     tags: [AboutUsShort]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Successfully deleted
 *       404:
 *         description: Record not found
 */
router.delete("/destroy/:id", authMiddleware, deleteAboutUsShort);

module.exports = router;
