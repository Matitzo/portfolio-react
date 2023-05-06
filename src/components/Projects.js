import { ProjectCard } from "./ProjectCard";
import SectionDevider from "./SectionDevider";
import { StyledProjectsContainerDiv } from "../styles/Projects.styled";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <StyledProjectsContainerDiv>
      <SectionDevider number={"03"} text={"Projects"} />
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </StyledProjectsContainerDiv>
  );
}
