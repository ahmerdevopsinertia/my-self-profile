const express = require("express");
const cors = require("cors");

const selfProfile = require("./profile");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/", selfProfile);

const PORT = 5002;

app.listen(
  PORT,
  console.log(`My Self Profile project server is running on ${PORT}`)
);
