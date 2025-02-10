const express = require("express");
const router = express.Router();
const {
  createSlider,
  getAllSliders,
  getSliderById,
  updateSlider,
  deleteSlider,
} = require("../controllers/slider");
const middleWare = require("../middlewares/adminAuthMiddleware");

/**
 * @swagger
 * /sliders:
 *   post:
 *     summary: Create a new slider
 *     tags: [Slider]
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
 *               mobile_image:
 *                 type: string
 *                 example: "https://example.com/mobile_image.jpg"
 *               titleAm:
 *                 type: string
 *                 example: "Title AM"
 *               titleRu:
 *                 type: string
 *                 example: "Title RU"
 *               titleEn:
 *                 type: string
 *                 example: "Title EN"
 *               subTitleAm:
 *                 type: string
 *                 example: "Subtitle AM"
 *               subTitleRu:
 *                 type: string
 *                 example: "Subtitle RU"
 *               subTitleEn:
 *                 type: string
 *                 example: "Subtitle EN"
 *     responses:
 *       201:
 *         description: Slider created successfully
 */
router.post("/", middleWare, createSlider);

/**
 * @swagger
 * /sliders:
 *   get:
 *     summary: Get all sliders
 *     tags: [Slider]
 *     responses:
 *       200:
 *         description: List of sliders
 */
router.get("/", getAllSliders);

/**
 * @swagger
 * /sliders/{id}:
 *   get:
 *     summary: Get slider by ID
 *     tags: [Slider]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Slider object
 */
router.get("/:id", getSliderById);

/**
 * @swagger
 * /sliders/{id}:
 *   put:
 *     summary: Update slider by ID
 *     tags: [Slider]
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
 *               image:
 *                 type: string
 *               mobile_image:
 *                 type: string
 *               titleAm:
 *                 type: string
 *               titleRu:
 *                 type: string
 *               titleEn:
 *                 type: string
 *               subTitleAm:
 *                 type: string
 *               subTitleRu:
 *                 type: string
 *               subTitleEn:
 *                 type: string
 *     responses:
 *       200:
 *         description: Slider updated successfully
 */
router.put("/:id", middleWare, updateSlider);

/**
 * @swagger
 * /sliders/{id}:
 *   delete:
 *     summary: Delete slider by ID
 *     tags: [Slider]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Slider deleted successfully
 */
router.delete("/:id", middleWare, deleteSlider);

module.exports = router;
