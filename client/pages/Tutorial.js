import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import ParseMarkDown from "../utils/markdown-parser";

function Tutorial(props) {
  useEffect(() => {
    applyStylesToComponents();
  }, []);

  const { tutorials } = useContext(Context);
  const { tutorialId } = useParams();
  const thisTutorial = tutorials.find((tutorial) => tutorial.id === tutorialId);
  const stringToMarkdown = thisTutorial.content;
  const markdownContent = ParseMarkDown(stringToMarkdown);

  return (
    <div className="show-content">
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
