import React from "react";
import { Switch, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Tutorials from "./pages/Tutorials";
import SearchView from "./pages/SearchView";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/tutoriales">
          <Tutorials />
        </Route>
        <Route path="/buscar">
          <SearchView />
        </Route>
        <Route path="/contacto"></Route>
        <Route path="/:tutorialId">
          <Tutorial />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
