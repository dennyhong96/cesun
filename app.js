require("dotenv").config({ path: "./config/config.env" });
const express = require("express");

const connectDB = require("./config/db");

const app = express();
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server up on port ${port}...`));
