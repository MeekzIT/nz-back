const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/schema");
const authMiddleware = require("../middlewares/adminAuthMiddleware");

router.get("/", getAll);

module.exports = router;
