import React from "react";

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import SocialLinks from "../../components/SocialLinks/index";
import ProfileImage from "../../components/ProfileImage";
import "./hero.scss";

function Hero() {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;

  return (
    <section id="hero" className="hero" style={{ backgroundColor }}>
      <div className="hero__image">
        <div className="item-a">
          <SocialLinks />
        </div>
        <div className="item-b">
          <ProfileImage />
        </div>
        <div className="item-c">
          <Typography variant="h4">Hey, I am Elmira</Typography>
          <Typography variant="subtitle1">Full Stack Web Developer</Typography>
          <Typography variant="subtitle1">
            I focus on producing high quality software solutions that are easy
            to read, understand and maintain.
          </Typography>
          <div className="hero__contact">
            <Button variant="contained" endIcon={<SendIcon />} href="#about">
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
