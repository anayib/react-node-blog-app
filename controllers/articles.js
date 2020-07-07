const articles = require("../services/articles");

exports.getAllArticles = async (req, res, next) => {
  try {
    const allArticles = await getArticles();
    Promise.all(allArticles).then((result) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "applciation/json");
      res.json(result);
    });
  } catch (error) {
    next(error);
  }
};

getArticles = async () => {
  try {
    return articles.map(async (article) => {
      const fileContent = await readArticleFile(`articles/${article.id}.md`);
      article.content = fileContent.toString();
      return article;
    });
  } catch (error) {
    console.log(error);
  }
};
