import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    photo: {
      type: String,
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    products: {
      type: Number,
    },
    price: {
      type: Number,
    },
    status: {
      type: String,
      enum: [
        'Completed',
        'Confirmed',
        'Pending',
        'Processing',
        'Shipped',
        'Delivered',
        'Cancelled',
      ],
    },
    order_date: {
      type: String,
    },
  },
  { versionKey: false, timestamps: false },
);

const Order = model('orders', orderSchema);

export default Order;
