// models/Item.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  email: String,
  gender: String,
  city: String,
});

module.exports = mongoose.model("Item", itemSchema);
