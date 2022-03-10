const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
  mobileno: Number,
  classId: Number,
});

module.exports = mongoose.model("students", studentSchema);
