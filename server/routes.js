const express = require("express");
const bodyParser = require("body-parser");
const tutorialsController = require("./controllers/tutorials");

const router = express.Router();
router.use(bodyParser.json());

router.get("/tutorials", tutorialsController.getAllTutorials);
//router.get("/tutorials/:tutorialId", tutorialsController.getTutorial);
//router.post("/tutorials/", tutorialsController.createTutorial);
//router.put("tutorials/:tutorailId", tutorialsController.updateTutorial);
// router.delete("tutorials/:tutorailId", tutorialsController.deleteTutorial);

//router.post('/posts', auth.login, psots.createPost)

module.exports = router;
