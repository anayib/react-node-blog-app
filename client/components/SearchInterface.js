import React from "react";
import { ContextProviderSearch } from "../SearchContext";
import SearchForm from "./SearchForm";
import DisplaySearchResult from "./DisplaySearchResult";

function SearchInterface() {
  return (
    <div>
      <ContextProviderSearch>
        <div className="search-container">
          <SearchForm />
          <DisplaySearchResult />
        </div>
      </ContextProviderSearch>
    </div>
  );
}

export default SearchInterface;
