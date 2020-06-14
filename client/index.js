import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Context";
import { ContextProviderSearch } from "./SearchContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <ContextProviderSearch>
        <App />
      </ContextProviderSearch>
    </Router>
  </ContextProvider>,
  document.getElementById("app")
);
