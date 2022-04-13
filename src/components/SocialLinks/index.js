import React from "react";

import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./socialLinks.css";

function SocialLinks() {
  return (
    <div className="icons_wrapper">
      <IconButton>
        <LinkedInIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
      <IconButton>
        <GitHubIcon />
      </IconButton>
    </div>
  );
}

export default SocialLinks;
