import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function LateralNavbar() {
  return (
    <div className="lateral-menu">
      <li>
        <Link to="/">Nayib</Link>
      </li>
      <li>
        <Link to="/tutoriales">Tutoriales</Link>
      </li>
      <li>
        <a href="https://twitter.com/anayib" target="_blank">
          Sígueme en Twitter
        </a>
      </li>
      <li>
        <Link to="/contacto">Contacto</Link>
      </li>
    </div>
  );
}

export default LateralNavbar;
