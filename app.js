require("dotenv").config({ path: "./config/config.env" });
const express = require("express");

const connectDB = require("./config/db");
const productRouter = require("./router/products");
const errorHandler = require("./controller/errors");

connectDB();
const app = express();

// Middlewares
app.use(express.json());

// Mount Routers
app.use("/api/v1/products", productRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server up on port ${port}...`));
