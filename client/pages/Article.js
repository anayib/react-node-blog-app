import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import ParseMarkDown from "../utils/markdown-parser";

function Article(props) {
  useEffect(() => {
    applyStylesToComponents();
  }, []);

  let { articles } = useContext(Context);
  articles =
    articles.length > 0
      ? articles
      : JSON.parse(localStorage.getItem("articles"));

  const { articleId } = useParams();
  const thisArticle = articles.find((article) => article.id === articleId);
  const stringToMarkdown = thisArticle.content;
  const markdownContent = ParseMarkDown(stringToMarkdown);

  return (
    <div className="show-content">
      <Helmet>
        <title>{thisArticle.title}</title>
        <meta charset="utf-8" />
        <meta name="description" content={thisArticle.metaDescription} />
        {/* FAcebook Linkedin cards */}
        <meta
          property="og:title"
          content={thisArticle.metaDescription || "Learn Java Script"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`http://www.nayibabdala.com/${thisArticle.id}`}
        />
        <meta
          property="og:description"
          content={thisArticle.metaDescription || "Learn Java Script"}
        />
        <meta
          property="og:image"
          content={
            thisArticle.image ||
            "http://www.leaninnovationgroup.com/images/nayib.jpg"
          }
        />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anayib" />
        <meta
          name="twitter:title"
          content={thisArticle.metaDescription || "Learn Java Script"}
        />
        <meta
          name="twitter:description"
          content={thisArticle.metaDescription || "Learn Java Script"}
        />
        <meta
          name="twitter:image"
          content={
            thisArticle.image ||
            "http://www.leaninnovationgroup.com/images/nayib.jpg"
          }
        />
        <meta name="twitter:creator" content="@anayib" />
      </Helmet>
      <h1>{thisArticle.title}</h1>
      <div>{markdownContent}</div>
    </div>
  );
}

function applyStylesToComponents() {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });
}

export default Article;
