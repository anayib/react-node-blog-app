import React from "react";

function NewsletterFrom() {
  return (
    <div>
      <h3>Recibe mis notas</h3>
      <p>Envío un email cada uno o dos meses</p>
      <form>
        <input type="text" className="mailing-input" />
        <br />
        <button>Recibir</button>
      </form>
    </div>
  );
}

export default NewsletterFrom;
