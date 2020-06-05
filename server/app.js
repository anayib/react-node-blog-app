const path = require("path");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.static(path.resolve(__dirname, "../client")));
app.use("/api", routes);

module.exports = app;
