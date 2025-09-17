const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // reference to User model
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'shipped', 'delivered'],
      default: 'pending'
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],  // ✅ added

  },
  {
    timestamps: true // automatically creates createdAt and updatedAt
  }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
