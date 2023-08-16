import React from "react";
import Pagination from "./Pagination";
import MainSlide from "./MainSlide";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  StyledProjectCardContainerDiv,
  StyledProjectCardInfoWrapperDiv,
  StyledProjectCardImg,
  StyledProjectCardButtonsWrapperDiv,
  StyledProjectCardTechWrapperDiv,
  StyledProjectCardTechDiv,
  StyledProjectCardSlideWrapper,
  StyledProjectCardSlidesContainer,
} from "../styles/ProjectCard.styled";
import Slides from "./Slides";

const slideVariants = {
  end: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  start: { y: 100, opacity: 0 },
};

export function ProjectCard({ project }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
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
      <StyledProjectCardInfoWrapperDiv>
        <h2>{project.title}</h2>
        <StyledProjectCardSlidesContainer>
          <StyledProjectCardSlideWrapper activeIndex={activeIndex}>
            <MainSlide photo={project.img} desc={project.description} />
            {project.areSlides &&
              project.pages.map((page) => (
                <Slides photo={page.img} descList={page.descList} />
              ))}
          </StyledProjectCardSlideWrapper>
        </StyledProjectCardSlidesContainer>
        {project.areSlides && (
          <Pagination
            activeIndex={activeIndex}
            setActiveIndex={(value) => setActiveIndex(value)}
            pages={project.pages}
          />
        )}
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
