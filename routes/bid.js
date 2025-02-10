const express = require("express");
const router = express.Router();
const {
  createBid,
  getAllBids,
  getBidById,
  updateBid,
  deleteBid,
} = require("../controllers/bid");
const authMiddleware = require("../middlewares/adminAuthMiddleware");

/**
 * @swagger
 * /bids:
 *   post:
 *     summary: Create a new bid
 *     tags: [Bids]
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
 *     responses:
 *       201:
 *         description: Bid created successfully
 */
router.post("/bids", createBid);

/**
 * @swagger
 * /bids:
 *   get:
 *     summary: Get all bids
 *     tags: [Bids]
 *     responses:
 *       200:
 *         description: List of all bids
 */
router.get("/bids", authMiddleware, getAllBids);

/**
 * @swagger
 * /bids/{id}:
 *   get:
 *     summary: Get a bid by ID
 *     tags: [Bids]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bid details
 *       404:
 *         description: Bid not found
 */
router.get("/bids/:id", authMiddleware, getBidById);

/**
 * @swagger
 * /bids/{id}:
 *   put:
 *     summary: Update a bid by ID
 *     tags: [Bids]
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
 *     responses:
 *       200:
 *         description: Bid updated successfully
 *       404:
 *         description: Bid not found
 */
router.put("/bids/:id", authMiddleware, updateBid);

/**
 * @swagger
 * /bids/{id}:
 *   delete:
 *     summary: Delete a bid by ID
 *     tags: [Bids]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bid deleted successfully
 *       404:
 *         description: Bid not found
 */
router.delete("/bids/:id", authMiddleware, deleteBid);

module.exports = router;
