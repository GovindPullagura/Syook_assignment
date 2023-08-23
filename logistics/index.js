const express = require("express");
require("dotenv").config();
const { connection } = require("./db");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Not connected to mongoDB");
  }
  console.log("Listening to the PORT");
});
