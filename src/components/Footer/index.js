import React from "react";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import IconButton from "@mui/material/IconButton";

import "./footer.scss";

function Footer(props) {
  const { name, onThemeClick, onMenuClick } = props;
  return (
    <footer>
      <p>{name}</p>
      <div>
        <IconButton color="secondary" onClick={onThemeClick}>
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton color="secondary" onClick={onMenuClick}>
          <WidgetsOutlinedIcon />
        </IconButton>
      </div>
    </footer>
  );
}

export default Footer;
