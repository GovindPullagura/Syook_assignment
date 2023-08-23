const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const CustomerModel = mongoose.model("customer", customerSchema);

module.exports = { CustomerModel };
