import React from "react";

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import IconButton from "@mui/material/IconButton";

import "./navbar.scss";

function Navbar({ onThemeClick }) {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;

  return (
    <div className="navbar" style={{ backgroundColor }}>
      <div className="navbar__logo">
        <Typography variant="subtitle1"> Elmira</Typography>
      </div>
      <div className="navbar__items">
        <a href="#hero">
          <Typography variant="body1">Home</Typography>
        </a>
        <a href="#about">
          <Typography variant="body1">About</Typography>
        </a>
        <a href="#skills">
          <Typography variant="body1">Skills</Typography>
        </a>
        {/* <a>
          <Typography variant="body1">Contact Me</Typography>
        </a> */}
        <IconButton color="secondary" onClick={onThemeClick}>
          <DarkModeOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
