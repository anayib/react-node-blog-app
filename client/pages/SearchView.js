import React from "react";
import { ContextProviderSearch } from "../SearchContext";
import SearchSuggestions from "../components/SearchSuggestions";

function SearchView() {
  return (
    <ContextProviderSearch>
      <h1 className="show-content">
        <SearchSuggestions />
      </h1>
    </ContextProviderSearch>
  );
}

export default SearchView;
