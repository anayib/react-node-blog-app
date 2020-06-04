const express = require("express");
const routes = require("./routes");
// imports mongoose tutorials model
var cors = require("cors");
// initialize database url
//const url = "mongodb://localhost:27017/nayibBlogNodeTest";
//const connect = mongoose.connect(url);
/*
connect.then(
  (db) => {
    console.log("Connected to Data Base Server");
  },
  (err) => console.log(err)
);
*/

const app = express();
app.use(cors());
//app.use(express.json());
//app.use(express.static(path.resolve(__dirname, '../client')));
app.use("/api", routes);

module.exports = app;
