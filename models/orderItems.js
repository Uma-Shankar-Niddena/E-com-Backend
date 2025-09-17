const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order', // reference to Order model
      required: true
    },
    products:[ {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // reference to Product model
      required: true
    }],
    
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = OrderItem;
