import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Intro from "../components/Intro";
import NewsletterFrom from "../components/NewsletterForm";
import axios from "axios";

function Home() {
  return (
    <div className="show-content">
      <Intro />
      <h3>Nayib</h3>
      <ul>
        <li>xxx</li>
      </ul>
      <Link to="/tutorials">Ver Tutoriales</Link> <br />
      <h2>Futuros tutoriales</h2>
      <NewsletterFrom />
      <p>
        <small>
          Publico nuevos tutoriales cortos y prácticos todos los meses.
        </small>
      </p>
    </div>
  );
}

export default Home;
