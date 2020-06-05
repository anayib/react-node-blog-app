const cors = require("cors");

const whiteList = [
  "http://localhost:8081",
  "https://nayib.abdala.com",
  "http://nayib.abdala.com",
];

const originIsWhitelisted = (origin, callback) => {
  if (whiteList.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    console.log("Not allowed");
    callback(new Error("Not allowed by CORS"));
  }
};

const corsOptions = { origin: originIsWhitelisted };

module.exports = { corsOptions, cors };
