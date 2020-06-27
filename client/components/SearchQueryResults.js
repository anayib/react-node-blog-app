import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../SearchContext";

function SearchQueryResults(props) {
  const { searchResults } = useContext(Context);

  const articlesList = searchResults.map((article) => {
    return (
      <div
        key={article.item ? article.item.id : article.id}
        className="show-note"
      >
        <h1>
          <Link to={`/${article.item ? article.item.id : article.id}`}>
            {article.item ? article.item.title : article.title}
          </Link>
        </h1>
      </div>
    );
  });

  return (
    <div className="show-content">
      <div>{articlesList}</div>
    </div>
  );
}

export default SearchQueryResults;
