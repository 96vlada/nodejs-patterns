const express = require("express");
const mongoose = require("mongoose");
const app = express();
const container = require("./container");
const registerServices = require("./registerServices");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

registerServices(container);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const routes = require("./routes");

app.use(process.env.API_PREFIX || "/api", routes);

module.exports = app;
