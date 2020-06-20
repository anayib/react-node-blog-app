import React from "react";

function Contact() {
  return (
    <div className="show-content">
      <h1>Let's get in touch</h1>
      <p>
        If you are interested in getting in touch, send me an email at:
        <br />
        <a
          href="mailto:nayib.abdala@leaninnovationgorup.com"
          className="yellow-words"
        >
          {" "}
          nayib.abdala@leaninnovationgroup.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
