import React, { useState, useEffect } from "react";
import axios from "axios";
//import dummyTestData from "./tests/dummyTestData";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    try {
      const content = await axios.get("/api/articles");
      setArticles(content.data);
      localStorage.setItem("articles", JSON.stringify(content.data));
    } catch (error) {
      console.log(error);
    }
  }
  console.log(articles);
  return <Context.Provider value={{ articles }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
