import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./skillsViewer.scss";
import { IconButton } from "@mui/material";
import Skill from "../Skill";

function SkillsViewer({ title, desc, icon, skills, expanded, onChange }) {
  return (
    <div className="skill-viewer">
      <Accordion
        expanded={expanded === title}
        onChange={() => onChange(expanded === title ? null : title)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordion__wrapper">
            <div className="accordion__icon">
              <IconButton color="primary">{icon}</IconButton>
            </div>
            <div className="accordion__details">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {skills.map((skill) => {
            return (
              <Skill
                key={skill.name}
                name={skill.name}
                percent={skill.percent}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SkillsViewer;
