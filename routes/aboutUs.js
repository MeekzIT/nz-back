const { Router } = require("express");
const {
  createAboutUs,
  getAllAboutUs,
  getAboutUsById,
  updateAboutUs,
  deleteAboutUs,
} = require("../controllers/aboutUs");
const authMiddleware = require("../middlewares/adminAuthMiddleware");

const router = Router();

/**
 * @swagger
 * /about-us:
 *   post:
 *     summary: Create a new About Us record
 *     tags: [AboutUs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               textAm_1:
 *                 type: string
 *               textRu_1:
 *                 type: string
 *               textEn_1:
 *                 type: string
 *               image_11:
 *                 type: string
 *               image_12:
 *                 type: string
 *               image_13:
 *                 type: string
 *               image_14:
 *                 type: string
 *               textAm_2:
 *                 type: string
 *               textRu_2:
 *                 type: string
 *               textEn_2:
 *                 type: string
 *               image_21:
 *                 type: string
 *               image_22:
 *                 type: string
 *               image_23:
 *                 type: string
 *               image_24:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created
 */
router.post("/", authMiddleware, createAboutUs);

/**
 * @swagger
 * /about-us:
 *   get:
 *     summary: Get all About Us records
 *     tags: [AboutUs]
 *     responses:
 *       200:
 *         description: Successfully retrieved records
 */
router.get("/", getAllAboutUs);

/**
 * @swagger
 * /about-us/{id}:
 *   get:
 *     summary: Get a specific About Us record by ID
 *     tags: [AboutUs]
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
router.get("/:id", getAboutUsById);

/**
 * @swagger
 * /about-us/edit/{id}:
 *   put:
 *     summary: Update an About Us record by ID
 *     tags: [AboutUs]
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
 *               textAm_1:
 *                 type: string
 *               textRu_1:
 *                 type: string
 *               textEn_1:
 *                 type: string
 *               image_11:
 *                 type: string
 *               image_12:
 *                 type: string
 *               image_13:
 *                 type: string
 *               image_14:
 *                 type: string
 *               textAm_2:
 *                 type: string
 *               textRu_2:
 *                 type: string
 *               textEn_2:
 *                 type: string
 *               image_21:
 *                 type: string
 *               image_22:
 *                 type: string
 *               image_23:
 *                 type: string
 *               image_24:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated
 *       404:
 *         description: Record not found
 */
router.put("/edit/:id", authMiddleware, updateAboutUs);

/**
 * @swagger
 * /about-us/destroy/{id}:
 *   delete:
 *     summary: Delete an About Us record by ID
 *     tags: [AboutUs]
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
router.delete("/destroy/:id", authMiddleware, deleteAboutUs);

module.exports = router;
