import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import ParseMarkDown from "../utils/markdown-parser";

function Tutorial(props) {
  useEffect(() => {
    applyStylesToComponents();
  }, []);

  let { tutorials } = useContext(Context);
  tutorials =
    tutorials.length > 0
      ? tutorials
      : JSON.parse(localStorage.getItem("tutorials"));

  const { tutorialId } = useParams();
  const thisTutorial = tutorials.find((tutorial) => tutorial.id === tutorialId);
  const stringToMarkdown = thisTutorial.content;
  const markdownContent = ParseMarkDown(stringToMarkdown);

  return (
    <div className="show-content">
      <Helmet>
        <title>{thisTutorial.title}</title>
        <meta charset="utf-8" />
        <meta name="description" content={thisTutorial.metaDescription} />
        {/* FAcebook Linkedin cards */}
        <meta
          property="og:title"
          content={thisTutorial.metaDescription || "Learn Java Script"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`http://www.nayibabdala.com/${thisTutorial.id}`}
        />
        <meta
          property="og:description"
          content={thisTutorial.metaDescription || "Learn Java Script"}
        />
        <meta
          property="og:image"
          content={
            thisTutorial.image ||
            "http://www.leaninnovationgroup.com/images/nayib.jpg"
          }
        />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anayib" />
        <meta
          name="twitter:title"
          content={thisTutorial.metaDescription || "Learn Java Script"}
        />
        <meta
          name="twitter:description"
          content={thisTutorial.metaDescription || "Learn Java Script"}
        />
        <meta
          name="twitter:image"
          content={
            thisTutorial.image ||
            "http://www.leaninnovationgroup.com/images/nayib.jpg"
          }
        />
        <meta name="twitter:creator" content="@anayib" />
      </Helmet>
      <h1>{thisTutorial.title}</h1>
      <div>{markdownContent}</div>
    </div>
  );
}

function applyStylesToComponents() {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });
}

export default Tutorial;
