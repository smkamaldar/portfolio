import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Link from "@mui/material/Link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import IconButton from "@mui/material/IconButton";

import "./menu.scss";

const navigationLinks = [
  { id: "#hero", name: "Home", icon: <HomeOutlinedIcon /> },
  { id: "#about", name: "About", icon: <PersonOutlineOutlinedIcon /> },
  { id: "#skills", name: "Skills", icon: <FeedOutlinedIcon /> },
  { id: "#contact", name: "Contact Me", icon: <SendOutlinedIcon /> },
];
function Menu(props) {
  const { open, onClose } = props;
  return (
    <div className="drawer">
      <SwipeableDrawer anchor="bottom" open={open} onClose={onClose}>
        <div className="drawer__content">
          {navigationLinks.map((item) => (
            <a className="drawer__link" href={item.id} onClick={onClose}>
              <IconButton>
                {item.icon}
                {item.name}
              </IconButton>
            </a>
          ))}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Menu;
