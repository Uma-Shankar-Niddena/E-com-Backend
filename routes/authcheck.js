const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.get("/auth/check", (req, res) => {
  console.log("🔍 Checking auth…");
  console.log("Cookies received:", req.cookies);

  const token = req.cookies.token;

  if (!token) {
    return res.json({ loggedIn: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ loggedIn: true, user: decoded });
  } catch (err) {
    return res.json({ loggedIn: false });
  }
});

module.exports = router;
