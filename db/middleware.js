const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" }); // make sure .env file is one level above

const SECRET_KEY = process.env.secreteKey;



const middleware = async (req, res, next) => {
  console.log("✅ Middleware triggered"); // check this log

  const token = req.cookies.token;
  console.log(token) // make sure cookie-parser is used in index.js

  if (!token) {
    console.log( token);
    return res.status(401).json({ message: "Access denied! Token missing" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (!decoded) {
      return res.status(403).json({ message: "Invalid JWT token!" });
    }

    console.log("✅ Token verified successfully", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("❌ JWT Verification Error:", error.message);
    return res
      .status(401)
      .json({ message: "Invalid or expired token", error: error.message });
  }
};

module.exports = middleware;
