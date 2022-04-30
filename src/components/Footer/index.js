import React from "react";

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import IconButton from "@mui/material/IconButton";

import "./footer.scss";

function Footer(props) {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;
  const { name, onThemeClick, onMenuClick } = props;
  return (
    <footer style={{ backgroundColor }}>
      <Typography variant="subtitle1">{name}</Typography>
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
