const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderNumber: {
      type: String,
      unique: true,
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };
