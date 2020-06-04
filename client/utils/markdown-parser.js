import React from "react";
import ReactMarkdown from "react-markdown";

function ParseMarkDown(stringToMarkdown) {
  return <ReactMarkdown source={stringToMarkdown} />;
}

export default ParseMarkDown;
