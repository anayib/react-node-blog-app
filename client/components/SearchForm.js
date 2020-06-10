import React, { useContext } from "react";
import { Context } from "../SearchContext";

function SearchForm() {
  const { searchKeyword, handleChange, handleKeyDown } = useContext(Context);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="De qué quieres aprender hoy"
          value={searchKeyword}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default SearchForm;
