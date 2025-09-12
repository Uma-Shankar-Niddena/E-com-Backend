const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../products.db");

const connectDB = () => {
  return new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error("❌ Error connecting to database:", err.message);
    } else {
      console.log("✅ Connected to SQLite database at", dbPath);
    }
  });
};

module.exports = connectDB;
