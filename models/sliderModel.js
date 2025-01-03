const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Slider", sliderSchema);
