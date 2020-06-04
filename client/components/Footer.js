import React from "react";

function Footer() {
  const year = new Date();

  return (
    <div>
      <p>
        <small>&copy; {year.getFullYear()} Lean Innovation Group</small>
      </p>
    </div>
  );
}

export default Footer;
