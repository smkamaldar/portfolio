import React from "react";

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import Experience from "../../components/Experience";
import "./about.scss";

function About() {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;

  return (
    <section className="about" id="about" style={{ backgroundColor }}>
      <div className="about__title">
        <Typography variant="h4">About Me</Typography>
        <Typography variant="subtitle1">My introduction</Typography>
      </div>
      <div className="about__intro">
        <img className="about__image" src="/images/1.jpg" />
        <Typography variant="subtitle1">
          My previous experience makes me an effective team member and team
          leader who communicates well and can easily adapt to new situations
          and conditions. I am eager to learn and grow with new opportunities.
        </Typography>
      </div>
      <div className="about__exp">
        <Experience caption="Years experience" isYear />
        <Experience count="10" caption="Completed projects" />
        <Experience count="1" caption="Companies worked" />
      </div>
      <div className="about__button">
        <Button
          variant="contained"
          endIcon={<FileDownloadOutlinedIcon />}
          href="./cv/Elmira-Kamaldar.pdf"
          download
        >
          Download CV
        </Button>
      </div>
    </section>
  );
}

export default About;
