const articles = require("../services/articles");

exports.getAllArticles = async (req, res, next) => {
  try {
    const allArticles = await getArticles();
    res.statusCode = 200;
    res.setHeader("Content-Type", "applciation/json");
    res.json(allArticles);
  } catch (error) {
    next(error);
  }
};

getArticles = () => {
  try {
    return articles.map((article) => {
      const fileContent = readArticleFile(`articles/${article.id}.md`);
      article.content = fileContent.toString();
      return article;
    });
  } catch (error) {
    console.log(error);
  }
};
