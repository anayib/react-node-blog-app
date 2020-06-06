const cors = require("cors");

const whitelist = [
  "http://localhost:8080",
  "https://nayibabdala.com",
  "http://nayibabdala.com",
  "https://personal-blog-nayib-node.herokuapp.com",
];

const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

module.exports = { corsOptionsDelegate, cors };
