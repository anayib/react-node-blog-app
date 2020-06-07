import React, { useState, useContext } from "react";
//import searchWithFuse from "./utils/search";
import { Context as AppContext } from "./Context";
import fuseQuery from "./utils/search";
const Context = React.createContext();

function ContextProviderSearch({ children }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { tutorials } = useContext(AppContext);
  const tutorialsArray = tutorials;

  const handleChange = async (event) => {
    let keywords = event.target.value;
    if (keywords.length > 0) {
      setSearchKeyword(event.target.value);
      await fuseQuery(tutorialsArray)
        .then((result) => result.search(searchKeyword))
        .then((data) => setSearchResults(data));
    } else {
      setSearchKeyword(event.target.value);
      setSearchResults([]);
    }
  };

  const handleOnClick = async () => {
    setSearchKeyword("");
    setSearchResults([]);
  };

  const handleEnter = async (event) => {
    if (event.keyCode === 13) {
      window.location.href = `/tutoriales`;
    }
  };

  const handleKeyDown = async (event) => {
    console.log("Pressed Key");
    let resultContainer =
      document.getElementsByClassName("results-container")[0] || "";
    resultContainer.getElementsByClassName(
      "show-note"
    )[0].style.backgroundColor = "red";
  };

  return (
    <Context.Provider
      value={{
        searchResults,
        searchKeyword,
        handleChange,
        handleEnter,
        handleOnClick,
        handleKeyDown,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProviderSearch, Context };
