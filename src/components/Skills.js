import React from "react";
import { IconContext } from "react-icons";
import {
  StyledSkillsContainer,
  StyledSkillsWrapper,
  StyledUl,
} from "../styles/Skills.tyled";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiLeaflet,
  SiExpress,
  SiPython,
  SiGitlab,
  SiBattledotnet,
  SiCsharp,
  SiAngular,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const skills = [
  "JavaScript",
  "React",
  "Angular",
  "TypeScript",
  "NodeJS",
  "Express",
  "Leaflet",
  "Python",
  "MySQL",
  "C#",
  ".NET",
  "GitLab",
];

function Skills() {
  function checkIcon(id) {
    if (id === 0) {
      return <SiJavascript />;
    } else if (id === 1) {
      return <SiReact />;
    } else if (id === 2) {
      return <SiAngular />;
    } else if (id === 3) {
      return <SiTypescript />;
    } else if (id === 4) {
      return <FaNodeJs />;
    } else if (id === 5) {
      return <SiExpress />;
    } else if (id === 6) {
      return <SiLeaflet />;
    } else if (id === 7) {
      return <SiPython />;
    } else if (id === 8) {
      return <GrMysql />;
    } else if (id === 9) {
      return <SiCsharp />;
    } else if (id === 10) {
      return <SiBattledotnet />;
    } else if (id === 11) {
      return <SiGitlab />;
    }
  }

  return (
    <StyledSkillsContainer>
      <StyledSkillsWrapper>
        <h3>Skills:</h3>
        <IconContext.Provider
          value={{
            size: "1.3rem",
          }}
        >
          <StyledUl>
            {skills.map((skill, id) => (
              <li>
                {checkIcon(id)}
                <span>{skill}</span>
              </li>
            ))}
          </StyledUl>
        </IconContext.Provider>
      </StyledSkillsWrapper>
    </StyledSkillsContainer>
  );
}

export default Skills;
