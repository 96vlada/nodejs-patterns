const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4010;
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

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const routes = require("./routes");

app.use(process.env.API_PREFIX || "/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
