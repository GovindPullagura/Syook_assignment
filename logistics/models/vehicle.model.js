const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      unique: true,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["bike", "truck"],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    activeOrdersCount: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

const VehicleModel = mongoose.model("vehicle", vehicleSchema);

module.exports = { VehicleModel };
