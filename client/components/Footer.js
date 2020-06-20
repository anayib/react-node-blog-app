import React from "react";

function Footer() {
  const year = new Date();

  return (
    <div className="footer">
      <a
        href="https://twitter.com/anayib"
        className="yellow-words"
        target="_blank"
      >
        Follow me on Twitter
      </a>
      <small>&copy; {year.getFullYear()} Lean Innovation Group</small>
    </div>
  );
}

export default Footer;
