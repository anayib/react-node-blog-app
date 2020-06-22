import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Learn Java Script</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Nayib Abdala Blog to learn Java Script"
        />
      </Helmet>
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
