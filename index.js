// import express from "express";
// import bodyParser from "body-parser";
// import userRoutes from "./routes/users.js";
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/usersRoute.js");
const productRouter = require("./routes/productsRoute.js");
const orderRouter = require("./routes/ordersRoute.js");

const app = express();
const PORT = 5000;

//middleware
app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("HOME");
});

app.listen(PORT, () => console.log("Server: http://localhost:5000"));
