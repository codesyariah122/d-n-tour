// const express = require("express");
import express from "express";
import services_router from "./app/routes/services";

const app = express();
// const services_router = require("./app/routes/services");

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use("/v1", services_router);
// app.use("/v1/locator", services_router);

export default app;
