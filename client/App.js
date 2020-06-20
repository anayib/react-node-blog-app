import React from "react";
import { Switch, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Tutorial from "./pages/Tutorial";
import Tutorials from "./pages/Tutorials";
import SearchView from "./pages/SearchView";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/bio">
          <Home />
        </Route>
        <Route exact path="/">
          <Tutorials />
        </Route>
        <Route path="/search">
          <SearchView />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/:tutorialId">
          <Tutorial />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
