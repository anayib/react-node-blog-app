const express = require("express");
const bodyParser = require("body-parser");
const tutorialsController = require("./controllers/tutorials");
const { corsOptions, cors } = require("./cors.js");

const router = express.Router();
router.use(bodyParser.json());

router.get(
  "/tutorials",
  cors(corsOptions),
  tutorialsController.getAllTutorials
);
//router.get("/tutorials/:tutorialId", tutorialsController.getTutorial);
//router.post("/tutorials/", tutorialsController.createTutorial);
//router.put("tutorials/:tutorailId", tutorialsController.updateTutorial);
// router.delete("tutorials/:tutorailId", tutorialsController.deleteTutorial);

//router.post('/posts', auth.login, psots.createPost)

module.exports = router;
