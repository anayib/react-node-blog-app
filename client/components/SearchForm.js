import React, { useContext } from "react";
import { Context } from "../SearchContext";

function SearchForm() {
  const { searchKeyword, handleChange, handleKeyDown } = useContext(Context);

  return (
    <div>
      <div>
        <input
          type="text"
          id="search-input"
          placeholder="De qué quieres aprender hoy"
          value={searchKeyword}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autofocus="true"
        />
      </div>
    </div>
  );
}

export default SearchForm;
