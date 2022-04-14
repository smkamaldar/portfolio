import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import SocialLinks from "../../components/SocialLinks/index";
import ProfileImage from "../../components/ProfileImage";
import "./hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <SocialLinks />
        <ProfileImage />
      </div>
      <div>
        <h1>Hey, I am Elmira</h1>
        <h4>Full Stack Web Developer</h4>
        <p>
          High level experience in web design and development knowledge,
          producing quality work.
        </p>
        <div className="hero__contact">
          <Button variant="contained" endIcon={<SendIcon />}>
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
