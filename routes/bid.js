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
 * /bid:
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
router.post("/", createBid);

/**
 * @swagger
 * /bid:
 *   get:
 *     summary: Get all bids
 *     tags: [Bids]
 *     responses:
 *       200:
 *         description: List of all bids
 */
router.get("/", authMiddleware, getAllBids);

/**
 * @swagger
 * /bid/{id}:
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
router.get("/:id", authMiddleware, getBidById);

/**
 * @swagger
 * /bid/edit/{id}:
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
router.put("/edit/:id", authMiddleware, updateBid);

/**
 * @swagger
 * /bid/destroy/{id}:
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
router.delete("/destroy/:id", authMiddleware, deleteBid);

module.exports = router;
