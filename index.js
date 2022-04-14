const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const foodRoute = require("./routes/foodRoute");

const app = express();

connectDB();
//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(foodRoute);

const PORT = process.env.PORT || 9000;

//Home route
app.get("/", (req, res) => {
  res.json("Welcome to my Menu API");
});

app.listen(PORT, () => {
  console.log("server is running successfully");
});
