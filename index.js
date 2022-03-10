const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const studentRoute = require("./routes/student");

dotenv.config();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Kiranraj27:Kiranraj27@cluster0.jxl11.mongodb.net/backendcrud?retryWrites=true&w=majority"
  )
  .then(console.log("Connected to mongodb"))
  .catch((error) => {
    console.log(error);
  });

app.use("/api", studentRoute);

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
