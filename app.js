const path = require("path");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/api", routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
