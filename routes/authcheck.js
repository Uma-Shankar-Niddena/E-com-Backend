const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.secreteKey;

router.get("/auth/check", (req, res) => {
  console.log("🔍 Checking auth…");
  console.log("Cookies received:", req.cookies);

  const token = req.cookies.token;

  if (!token) {
    return res.json({ loggedIn: false });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return res.json({ loggedIn: true, user: decoded });
  } catch (err) {
    return res.json({ loggedIn: false });
  }
});

module.exports = router;
