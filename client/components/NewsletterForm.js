import React from "react";

function NewsletterForm() {
  return (
    <div>
      <form className="form-container">
        <p>Get updates once a month</p>
        <small>
          I write about my experience creating products and internet business
        </small>
        <input type="text" className="mailing-input" />
        <button className="submit-buttom">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterForm;
