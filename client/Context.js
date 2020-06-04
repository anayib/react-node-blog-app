import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    //fetchTutorials();
  }, []);

  async function fetchTutorials() {
    try {
      const content = await axios.get("http://localhost:8080/api/tutorials");
      setTutorials(content.data);
    } catch (error) {
      console.log(error);
    }
  }

  return <Context.Provider value={{ tutorials }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
