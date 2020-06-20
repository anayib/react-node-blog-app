import React from "react";
import SearchForm from "./SearchForm";
import SearchSuggestions from "./SearchSuggestions";

function SearchInterface() {
  return (
    <div className="search-container">
      <SearchForm />
      <SearchSuggestions />
    </div>
  );
}

export default SearchInterface;
