const tutorials = require("../services/tutorials");

exports.getAllTutorials = async (req, res, next) => {
  try {
    const allTutorials = await getTutorials();
    Promise.all(allTutorials).then((result) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "applciation/json");
      res.json(result);
    });
  } catch (error) {
    next(error);
  }
};

getTutorials = async () => {
  try {
    return tutorials.map(async (tutorial) => {
      const fileContent = await readTutorialFile(`tutorials/${tutorial.id}.md`);
      tutorial.content = fileContent.toString();
      return tutorial;
    });
  } catch (error) {
    console.log(error);
  }
};

/*
exports.getAllTutorials = (req, res, next) => {
  Tutorials.find({})
    .then((tutorials) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "applciation/json");
      res.json(tutorials);
    })
    .catch((error) => {
      next(error);
    });
};

exports.createTutorial = async (req, res, next) => {
  try {
    Tutorials.create(req.body).then((tutorial) => {
      console.log("Tutorial Created");
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.json(tutorial);
    });
  } catch (error) {
    next(error);
  }
};


exports.createTutorial = (req, res, next) => {
  Tutorials.create(req.body)
    .then((tutorial) => {
      console.log("Tutorial Created");
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.json(tutorial);
    })
    .catch((error) => {
      next(error);
    });
};

exports.getTutorial = async (req, resp, next) => {
  try {
    Tutorials.findById(req.params.tutorialId).then((tutorial) => {
      resp.statusCode = 200;
      resp.setHeader("Content-Type", "applciation/json");
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTutorial = async (req, res, next) => {
  try {
    Tutorials.findByIdAndUpdate(
      req.params.tutorialId,
      {
        $set: req.body,
      },
      { new: true }
    ).then((tutorial) => {
      console.log("POST operation has beed successfull");
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.json(tutorial);
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTutorial = async (req, res, next) => {
  try {
    Tutorials.findByIdAndRemove(req.params.tutorialId).then((tutorial) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(tutorial);
    });
  } catch (error) {
    next(error);
  }
};
*/
