import React, { useState, useEffect } from "react";
import axios from "axios";
//import dummyTestData from "./tests/dummyTestData";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetchTutorials();
  }, []);

  async function fetchTutorials() {
    try {
      const content = await axios.get("/api/tutorials");
      setTutorials(content.data);
      localStorage.setItem("tutorials", JSON.stringify(content.data));
    } catch (error) {
      console.log(error);
    }
  }
  console.log(tutorials);
  return <Context.Provider value={{ tutorials }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
