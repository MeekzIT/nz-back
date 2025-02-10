const express = require("express");
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projects");
const authMiddleware = require("../middlewares/adminAuthMiddleware"); // Optional authentication middleware

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titleAm:
 *                 type: string
 *               titleRu:
 *                 type: string
 *               titleEn:
 *                 type: string
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
 *         description: Project created successfully
 */
router.post("/projects", authMiddleware, createProject);

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of all projects
 */
router.get("/projects", getAllProjects);

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Get a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Project details
 *       404:
 *         description: Project not found
 */
router.get("/projects/:id", getProjectById);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Update a project by ID
 *     tags: [Projects]
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
 *               titleAm:
 *                 type: string
 *               titleRu:
 *                 type: string
 *               titleEn:
 *                 type: string
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
 *         description: Project updated successfully
 *       404:
 *         description: Project not found
 */
router.put("/projects/:id", authMiddleware, updateProject);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Delete a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Project deleted successfully
 *       404:
 *         description: Project not found
 */
router.delete("/projects/:id", authMiddleware, deleteProject);

module.exports = router;
