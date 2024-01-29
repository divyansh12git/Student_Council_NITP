const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/user");

const app = express();

app.use(cors());
app.use(express.json());



app.listen(3001, () => {
  console.log("running");
});
