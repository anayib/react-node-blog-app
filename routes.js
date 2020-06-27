const express = require("express");
const bodyParser = require("body-parser");
const articlesController = require("./controllers/articles");
const { corsOptionsDelegate, cors } = require("./cors");

const router = express.Router();
router.use(bodyParser.json());

router.get(
  "/articles",
  cors(corsOptionsDelegate),
  articlesController.getAllArticles
);

module.exports = router;
