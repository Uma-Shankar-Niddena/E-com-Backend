const mongoose = require('mongoose');

const adminCheckingOrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    deliveryAddress: {
      type: String,
      required: true
    },
    paymentMethod: {
      type: String,
      enum: ['Card', 'Wallet', 'Cash'],
      required: true
    },
    specialInstructions: {
      type: String
    },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
      }
    ],
    subtotal: { type: Number, required: true },
    deliveryFee: { type: Number, required: true },
    taxes: { type: Number, required: true },
    total: { type: Number, required: true },
    status: {
      type: String,
      default: 'Placed',
      enum: ['Placed', 'Preparing', 'Delivered']
    }
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } 
  }
);

const AdminCheckingOrder = mongoose.model('AdminCheckingOrder', adminCheckingOrderSchema);
module.exports = AdminCheckingOrder;
