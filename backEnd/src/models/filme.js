const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  score: { type: Number, required: true },
  image_url: { type: String, required: true },
  trailer: { type: String, required: true },
  year: { type: String, required: true },
});

const Filme = mongoose.model("Filme", filmeSchema);

module.exports = Filme;
