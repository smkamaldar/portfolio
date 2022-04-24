import React from "react";

import Slider from "@mui/material/Slider";
import "./skill.scss";

function Skill({ name, percent }) {
  return (
    <div className="skill">
      <div className="skill__title">
        <p>{name}</p>
        <p>{percent}%</p>
      </div>
      <Slider defaultValue={percent} color="primary" />
    </div>
  );
}

export default Skill;
