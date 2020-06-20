import React from "react";
import { Link } from "react-router-dom";
import Intro from "../components/Intro";
import NewsletterFrom from "../components/NewsletterForm";

function Home() {
  return (
    <div className="show-content">
      <Intro />
    </div>
  );
}

export default Home;
