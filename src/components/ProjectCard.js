import React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  StyledProjectCardContainerDiv,
  StyledProjectCardInfoWrapperDiv,
  StyledProjectCardImg,
  StyledProjectCardButtonsWrapperDiv,
  StyledProjectCardTechWrapperDiv,
  StyledProjectCardTechDiv,
} from "../styles/ProjectCard.styled";

const slideVariants = {
  end: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  start: { y: 100, opacity: 0 },
};

export function ProjectCard({ project }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("end");
    }
  }, [controls, inView]);

  return (
    <StyledProjectCardContainerDiv
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="start"
      variants={slideVariants}
    >
      <StyledProjectCardImg src={project.img}></StyledProjectCardImg>
      <StyledProjectCardInfoWrapperDiv>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <StyledProjectCardButtonsWrapperDiv>
          <a href={project.link} target="_blank">
            <button>Link</button>
          </a>
          {project.gitHubLink && (
            <a href={project.gitHubLink} target="_blank">
              <button>Github</button>
            </a>
          )}
        </StyledProjectCardButtonsWrapperDiv>

        <StyledProjectCardTechWrapperDiv>
          {project.technology.map((tech) => (
            <StyledProjectCardTechDiv>{tech}</StyledProjectCardTechDiv>
          ))}
        </StyledProjectCardTechWrapperDiv>
      </StyledProjectCardInfoWrapperDiv>
    </StyledProjectCardContainerDiv>
  );
}
