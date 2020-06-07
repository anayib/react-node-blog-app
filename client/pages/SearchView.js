import React from "react";
import { ContextProviderSearch } from "../SearchContext";
import DisplaySearchResult from "../components/DisplaySearchResult";

function SearchView() {
  return (
    <ContextProviderSearch>
      <h1 className="show-content">
        <DisplaySearchResult />
      </h1>
    </ContextProviderSearch>
  );
}

export default SearchView;
