import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Tutorials() {
  const { tutorials } = useContext(Context);

  const tutorialsList = tutorials.map((tutorial) => {
    return (
      <div key={tutorial.id} className="show-note">
        <h1>
          <Link to={`/${tutorial.id}`}>{tutorial.title}</Link>
        </h1>
      </div>
    );
  });

  return (
    <div className="show-content">
      <div>{tutorialsList}</div>
    </div>
  );
}

export default Tutorials;
