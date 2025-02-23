const express = require("express");
const router = express.Router();
const {
  getAll,
  getAppartementCountByFloor,
  edit,
} = require("../controllers/schema");
const authMiddleware = require("../middlewares/adminAuthMiddleware");

/**
 * @swagger
 * /schema:
 *   get:
 *     summary: Get all Schema records
 *     tags: [Schema]
 *     responses:
 *       200:
 *         description: Successfully retrieved records
 */
router.get("/", getAll);

/**
 * @swagger
 * /schema/available:
 *   get:
 *     summary: Get all Schema records
 *     tags: [Schema]
 *     responses:
 *       200:
 *         description: Successfully retrieved records
 */
router.get("/available", getAppartementCountByFloor);
/**
 * @swagger
 * /projects/edit/{id}:
 *   post:
 *     summary: Update a project by ID
 *     tags: [Schema]
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
 *               in_stock:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       200:
 *         description: Project updated successfully
 *       404:
 *         description: Project not found
 */
router.post("/edit", edit);

module.exports = router;
