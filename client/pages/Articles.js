import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Articles() {
  const { articles } = useContext(Context);

  const articlesList = articles.map((article) => {
    return (
      <div key={article.id} className="show-note">
        <h1>
          <Link to={`/${article.id}`}>{article.title}</Link>
        </h1>
      </div>
    );
  });

  return <div className="show-content">{articlesList}</div>;
}

export default Articles;
