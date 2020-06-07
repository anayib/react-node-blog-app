import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../SearchContext";

function DisplaySearchResult() {
  const { searchResults, handleOnClick, handleKeyDown } = useContext(Context);

  const tutorialsList = searchResults.map((tutorial) => {
    return (
      <div key={tutorial.item.id} className="show-note">
        <ul onKeyDown={handleKeyDown}>
          <li className="no-bullets">
            <Link onClick={handleOnClick} to={`/${tutorial.item.id}`}>
              {tutorial.item.title}
            </Link>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className="results-container">
      <div>{tutorialsList}</div>
    </div>
  );
}

export default DisplaySearchResult;
