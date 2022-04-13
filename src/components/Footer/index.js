import React from "react";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import IconButton from "@mui/material/IconButton";

import "./footer.css";

function Footer(props) {
  const { name, onThemeClick, onMenuClick } = props;
  return (
    <footer>
      <p>{name}</p>
      <div>
        <IconButton onClick={onThemeClick}>
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton color="primary" onClick={onMenuClick}>
          <WidgetsOutlinedIcon />
        </IconButton>
      </div>
    </footer>
  );
}

export default Footer;
