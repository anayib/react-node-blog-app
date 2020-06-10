import React from "react";
import { ContextProviderSearch } from "../SearchContext";
import SearchForm from "./SearchForm";
import SearchSuggestions from "./SearchSuggestions";

function SearchInterface() {
  return (
    <div>
      <ContextProviderSearch>
        <div className="search-container">
          <SearchForm />
          <SearchSuggestions />
        </div>
      </ContextProviderSearch>
    </div>
  );
}

export default SearchInterface;
