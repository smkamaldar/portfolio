import React, { useState } from "react";
import SkillsViewer from "../../components/SkillsViewer";

import DnsIcon from "@mui/icons-material/Dns";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StorageIcon from "@mui/icons-material/Storage";
import "./skills.scss";

function Skills() {
  const [expanded, setExpanded] = useState(null);
  return (
    <section id="skills">
      <div className="skills__title">
        <h1>Skills</h1>
        <p>My technical level</p>
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
