const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  standerd: Number,
  division: String,
  id: Number,
});

module.exports = mongoose.model("classes", classSchema);
