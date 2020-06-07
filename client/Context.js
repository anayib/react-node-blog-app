import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [tutorials, setTutorials] = useState([]);
  let [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    fetchTutorials();
    setDummyData(dummyData);
  }, []);

  async function fetchTutorials() {
    try {
      const content = await axios.get("/api/tutorials");
      setTutorials(content.data);
    } catch (error) {
      console.log(error);
    }
  }

  dummyData = [
    {
      id: "introduccion-a-node-js",
      title: "Introducción a Node JS",
      tags: ["Node", "JavaScript"],
      metaDescription: "Node, aprender node JS para directores de producto",
    },
    {
      id: "introduccion-a-react-js",
      title: "Introducción a React JS",
      tags: ["React", "JavaScript"],
      metaDescription: "React, aprender react para directores de producto",
    },
  ];

  return (
    <Context.Provider value={{ tutorials, dummyData }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
