import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../SearchContext";

function SearchQueryResults(props) {
  const { searchResults } = useContext(Context);

  const tutorialsList = searchResults.map((tutorial) => {
    return (
      <div
        key={tutorial.item ? tutorial.item.id : tutorial.id}
        className="show-note"
      >
        <h1>
          <Link to={`/${tutorial.item ? tutorial.item.id : tutorial.id}`}>
            {tutorial.item ? tutorial.item.title : tutorial.title}
          </Link>
        </h1>
      </div>
    );
  });

  return (
    <div className="show-content">
      <div>{tutorialsList}</div>
    </div>
  );
}

export default SearchQueryResults;
