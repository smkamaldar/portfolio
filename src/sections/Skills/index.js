import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import DnsIcon from "@mui/icons-material/Dns";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StorageIcon from "@mui/icons-material/Storage";

import SkillsViewer from "../../components/SkillsViewer";
import "./skills.scss";

function Skills() {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default;

  const [expanded, setExpanded] = useState(null);
  return (
    <section id="skills" style={{ backgroundColor }}>
      <div className="skills__title">
        <Typography variant="h4">Skills</Typography>
        <Typography variant="subtitle1">My technical level</Typography>
      </div>
      <div className="skills__wrapper">
        <SkillsViewer
          title="Backend developer"
          desc="1 year experience"
          icon={<DnsIcon />}
          skills={[
            { name: "HTML", percent: 90 },
            { name: "CSS", percent: 80 },
            { name: "JavaScript", percent: 70 },
            { name: "React", percent: 60 },
          ]}
          expanded={expanded}
          onChange={setExpanded}
        />

        <SkillsViewer
          title="Frontend developer"
          desc="1 year experience"
          icon={<DataObjectIcon />}
          skills={[
            { name: "Node", percent: 60 },
            { name: "Express", percent: 60 },
            { name: "Heroku", percent: 40 },
          ]}
          expanded={expanded}
          onChange={setExpanded}
        />
        <SkillsViewer
          title="Database"
          desc="1 year experience"
          icon={<StorageIcon />}
          skills={[{ name: "Postgres", percent: 50 }]}
          expanded={expanded}
          onChange={setExpanded}
        />
      </div>
    </section>
  );
}

export default Skills;
