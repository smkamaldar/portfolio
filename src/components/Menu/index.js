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
  { name: "Home", link: "", icon: <HomeOutlinedIcon /> },
  { name: "About", link: "", icon: <PersonOutlineOutlinedIcon /> },
  { name: "Skills", link: "", icon: <FeedOutlinedIcon /> },
  { name: "Contact Me", link: "", icon: <SendOutlinedIcon /> },
];
function Menu() {
  return (
    <div>
      <SwipeableDrawer anchor="bottom" open={true}>
        <div className="drawer__content">
          {navigationLinks.map((item) => (
            <div className="drawer__link">
              <IconButton>
                {item.icon}
                {item.name}
              </IconButton>
            </div>
          ))}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Menu;
