import React from "react";
import "./experience.scss";

function Experience({ count, caption, isYear }) {
  const stratedYear = "2021";
  const date = new Date();
  const result = date.getFullYear() - stratedYear;
  return (
    <div className="container">
      <h4>{isYear ? result : count}+</h4>
      <p>{caption}</p>
    </div>
  );
}

export default Experience;
