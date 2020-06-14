import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../SearchContext";

function SearchSuggestions() {
  const history = useHistory();
  const {
    searchResults,
    handleOnClick,
    selectedOption,
    optionsVisible,
  } = useContext(Context);
  const display =
    optionsVisible && history.location.pathname !== "/buscar" ? "flex" : "none";

  const tutorialsList = searchResults.map((tutorial, index) => {
    let selectedClass = "";
    if (index === selectedOption) {
      selectedClass = "no-bullets selected-choice show-option";
    } else {
      selectedClass = "no-bullets show-option";
    }
    return (
      <li key={tutorial.item.id} className={selectedClass}>
        <Link onClick={handleOnClick} to={`/${tutorial.item.id}`}>
          {tutorial.item.title}
        </Link>
      </li>
    );
  });

  return (
    <div className="search-suggestions" style={{ display: display }}>
      <ul>{tutorialsList}</ul>
    </div>
  );
}

export default SearchSuggestions;
