const Admin = require("../models").Admin;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: ["Password and email are required fields"],
      });
    }

    const admin = await Admin.findOne({
      where: { email: email.toLowerCase() },
    });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      const token = jwt.sign(
        { user_id: admin.id, email, role: admin.role },
        process.env.TOKEN_KEY_ADMIN,
        { expiresIn: "2h" }
      );

      return res.json({ data: { ...admin.toJSON(), token }, success: true });
    }

    return res.status(401).json({ error: ["Invalid credentials"] });
  } catch (e) {
    console.error("Login error:", e);
    return res.status(500).json({ error: ["Something went wrong"] });
  }
};

const logout = async (req, res) => {
  try {
    const { user_id } = req.user;

    const admin = await Admin.findOne({ where: { id: user_id } });

    if (!admin) {
      return res.status(404).json({ error: ["User not found"] });
    }

    admin.token = null;
    await admin.save();

    return res.json({ success: true });
  } catch (e) {
    console.error("Logout error:", e);
    return res.status(500).json({ error: ["Something went wrong"] });
  }
};

module.exports = { login, logout };
