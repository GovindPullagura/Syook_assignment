const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const ItemModel = mongoose.model("item", itemSchema);

module.exports = { ItemModel };
