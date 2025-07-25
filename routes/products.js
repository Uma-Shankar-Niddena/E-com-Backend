const express = require("express");
const router = express.Router();
const connectDB = require("../db/connection");

router.get("/products", async (req, res) => {
  try {
    const db = await connectDB();
    const productsFromDb = await db.all("SELECT * FROM products");
    const stuffp=await db.all(`SELECT * FROM products WHERE category=?`,["stuff"])
    
    
    res.json({message:productsFromDb});
 
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({message:"Something went wrong"});
  }
});

module.exports = router;
