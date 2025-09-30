const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  eligibility: String,
  benefits: String,
  link: String,
  category: String,
  state: String
});

module.exports = mongoose.model("Scheme", schemeSchema);
