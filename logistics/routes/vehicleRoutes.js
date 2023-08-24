const express = require("express");
const vehicleRouter = express.Router();
const { VehicleModel } = require("../models/vehicle.model");

vehicleRouter.get("/", async (req, res) => {
  try {
    const data = await VehicleModel.find();
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

vehicleRouter.post("/addVehicle", async (req, res) => {
  const payload = req.body;
  try {
    const newVehicle = new VehicleModel(payload);
    await newVehicle.save();
    res.send("New vehicle data has been added to the database.");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { vehicleRouter };
