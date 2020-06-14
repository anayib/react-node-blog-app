import React, { useState, useContext } from "react";
import { Context as AppContext } from "./Context";
import { useHistory } from "react-router-dom";
import fetchMatches from "./utils/search";
const Context = React.createContext();

function ContextProviderSearch({ children }) {
  const [searchKeyword, setSearchKeyword] = useState(""); // text input
  const [searchResults, setSearchResults] = useState([]); // matches
  const { tutorials } = useContext(AppContext); // listUI
  const [bestMatchIndex, setBestMatchIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const history = useHistory();

  const tutorialsArray = tutorials;

  const handleChange = async (event) => {
    let keywords = event.target.value;
    showMatches(keywords);
  };

  const handleOnClick = async () => {
    resetMatches();
  };

  const handleKeyDown = async (event) => {
    let keyword = "";
    setSelectedOption(null);
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        console.log(`inside Keydown: ${event.key}`);
        if (
          selectedOption === null ||
          selectedOption === searchResults.length - 1
        ) {
          setSelectedOption(0);
        } else {
          setSelectedOption(selectedOption + 1);
        }
        setBestMatchIndex(null);
        showMatches(event.target.value);
        break;
      case "ArrowUp":
        event.preventDefault();
        console.log(`inside KeyUp: ${event.key}`);
        if (selectedOption === null || selectedOption === 0) {
          setSelectedOption(searchResults.length - 1);
        } else {
          setSelectedOption(selectedOption - 1);
        }
        setBestMatchIndex(null);
        showMatches(event.target.value);
        break;
      case "Tab":
        if (bestMatchIndex !== null && searchResults.length !== 0) {
          keyword = searchResults[bestMatchIndex].item.title;
          event.target.value = keyword;
          setSearchKeyword(keyword);
          event.preventDefault();
        }
        break;
      case "Enter":
        console.log("inicia enter");
        keyword = document.getElementById("search-input").value;
        setSearchKeyword(keyword);
        showMatches(keyword);
        history.push("/buscar");
        cleanSuggesions(event);
        event.preventDefault();
        break;
    }
  };

  const showMatches = async (keywords) => {
    if (keywords.length > 0) {
      setOptionsVisible(true);
      setSearchKeyword(event.target.value);
      await fetchMatches(tutorialsArray)
        .then((result) => result.search(searchKeyword))
        .then((data) => setSearchResults(data))
        .then(() => setBestMatchIndex(0))
        .catch((err) =>
          console.log(
            `Error raised in SearchContext component line 84: ${err.message}`
          )
        );
    } else {
      resetMatches(event.target.value);
    }
  };

  const resetMatches = (targetValue) => {
    const target = targetValue || "";
    setSearchKeyword(target);
    setSearchResults([]);
    setBestMatchIndex(null);
    setOptionsVisible(false);
  };

  const cleanSuggesions = (targetValue) => {
    setSearchKeyword("");
  };

  return (
    <Context.Provider
      value={{
        searchResults,
        searchKeyword,
        setSearchResults,
        handleChange,
        handleOnClick,
        handleKeyDown,
        selectedOption,
        optionsVisible,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProviderSearch, Context };
