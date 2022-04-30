import React from "react";
import "./experience.scss";

import Typography from "@mui/material/Typography";

function Experience({ count, caption, isYear }) {
  const stratedYear = "2021";
  const date = new Date();
  const result = date.getFullYear() - stratedYear;
  return (
    <div className="experience">
      <Typography variant="subtitle1" align="center">
        {isYear ? result : count}+
      </Typography>
      <Typography variant="subtitle1" align="center">
        {caption}
      </Typography>
    </div>
  );
}

export default Experience;
