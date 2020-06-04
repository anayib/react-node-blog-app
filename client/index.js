import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./Context";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("app")
);
