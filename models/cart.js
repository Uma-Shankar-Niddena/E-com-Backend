// models/Cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // references the User model
      required: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // references the Product model
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    }
  },
  {
    timestamps: true // adds createdAt and updatedAt
  }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
