require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
   
    console.log("Database url",process.env.secreteKey)

    await mongoose.connect(process.env.DATABASE_URL, {
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected...");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
