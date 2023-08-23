const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const { itemsRouter } = require("./routes/itemRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/items", itemsRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Not connected to mongoDB");
  }
  console.log("Listening to the PORT");
});
