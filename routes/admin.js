const express = require("express");
const { login, logout } = require("../controllers/admin");
const authMiddleware = require("../middlewares/adminAuthMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Admin login
 *     tags: [Auth]
 *     description: Authenticate an admin and return a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "admin@mail.com"
 *               password:
 *                 type: string
 *                 example: "admin1234"
 *     responses:
 *       200:
 *         description: Successfully authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     email:
 *                       type: string
 *                       format: email
 *                     role:
 *                       type: string
 *                     token:
 *                       type: string
 *       400:
 *         description: Missing email or password
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", login);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Admin logout
 *     tags: [Auth]
 *     description: Logs out an admin by invalidating their token.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully logged out
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *       401:
 *         description: Unauthorized - Invalid or missing token
 */
router.post("/logout", authMiddleware, logout);

module.exports = router;
