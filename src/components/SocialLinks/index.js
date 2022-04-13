import React from "react";

import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./socialLinks.css";

function SocialLinks() {
  return (
    <div className="icons_wrapper">
      <a href="https://www.linkedin.com/in/elmirakamaldar" target="_blank">
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
      </a>
      <a href="https://www.instagram.com/developer.bay" target="_blank">
        <IconButton color="primary">
          <InstagramIcon />
        </IconButton>
      </a>
      <a href="https://github.com/smkamaldar" target="_blank">
        <IconButton color="primary">
          <GitHubIcon />
        </IconButton>
      </a>
    </div>
  );
}

export default SocialLinks;
