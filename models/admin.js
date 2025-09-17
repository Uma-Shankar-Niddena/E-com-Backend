// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true // hashed password
    }
  },
  {
    timestamps: true // creates createdAt and updatedAt automatically
  }
);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
