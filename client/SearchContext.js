import React, { useState, useContext, useEffect } from "react";
//import searchWithFuse from "./utils/search";
import { Context as AppContext } from "./Context";
import fetchMatches from "./utils/search";
const Context = React.createContext();

function ContextProviderSearch({ children }) {
  const [searchKeyword, setSearchKeyword] = useState(""); // text input
  const [searchResults, setSearchResults] = useState([]); // matches
  const { tutorials } = useContext(AppContext); // listUI
  const [bestMatchIndex, setBestMatchIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const tutorialsArray = tutorials;

  const handleChange = async (event) => {
    let keywords = event.target.value;
    showMathes(keywords);
  };

  const handleOnClick = async () => {
    resetMatches();
  };

  const handleKeyDown = async (event) => {
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
        showMathes(event.target.value);
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
        showMathes(event.target.value);
        break;
      case "Tab":
        if (bestMatchIndex !== null && searchResults.length !== 0) {
          event.target.value = searchResults[bestMatchIndex].item.title;
          event.preventDefault();
        }
        break;
    }
  };

  const showMathes = async (keywords) => {
    if (keywords.length > 0) {
      setOptionsVisible(true);
      setSearchKeyword(event.target.value);
      await fetchMatches(tutorialsArray)
        .then((result) => result.search(searchKeyword))
        .then((data) => setSearchResults(data))
        .then(() => setBestMatchIndex(0))
        .catch((err) =>
          console.log(`ESTE ERROR DENTRO DE SHOWMATHCES: ${err}`)
        );
    } else {
      resetMatches(event.target.value);
    }
  };

  const resetMatches = (targetValue) => {
    const target = targetValue || null;
    setSearchKeyword(target);
    setSearchResults([]);
    setBestMatchIndex(null);
    setOptionsVisible(false);
  };

  console.log(selectedOption);
  return (
    <Context.Provider
      value={{
        searchResults,
        searchKeyword,
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
