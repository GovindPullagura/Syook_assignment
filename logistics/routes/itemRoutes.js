const express = require("express");
const itemsRouter = express.Router();
const { ItemModel } = require("../models/item.model");

itemsRouter.get("/", async (req, res) => {
  try {
    const data = await ItemModel.find();
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

itemsRouter.post("/addItem", async (req, res) => {
  const payload = req.body;
  try {
    const newItem = new ItemModel(payload);
    await newItem.save();
    res.send("Item has been added to the database.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

itemsRouter.patch("/editItem/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await ItemModel.findByIdAndUpdate({ _id: id }, payload);
    res.send("Item data has been updated successfully.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { itemsRouter };
