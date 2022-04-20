import React from "react";

import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

import Experience from "../../components/Experience";
import "./about.scss";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__title">
        <h1>About Me</h1>
        <p>My introduction</p>
      </div>
      <div className="about__intro">
        <img className="about__image" src="/images/about.jpg" />
        <p>
          web developer, with extensive knowledge and years of
          experience,working in web technologies and ui/ux design, delivering
          quality work
        </p>
      </div>
      <div className="about__exp">
        <Experience caption="Years experience" isYear={true} />
        <Experience count="10" caption="Completed projects" isYear={false} />
        <Experience count="5" caption="Companies worked" isYear={false} />
      </div>
      <div className="about__button">
        <Button variant="contained" endIcon={<FileDownloadOutlinedIcon />}>
          <a href="./cv/Elmira-Kamaldar.pdf" download>
            Download CV
          </a>
        </Button>
        <a className="" href="#hero">
          <ArrowUpwardRoundedIcon />
        </a>
      </div>
    </section>
  );
}

export default About;
