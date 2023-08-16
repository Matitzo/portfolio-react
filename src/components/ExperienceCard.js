import React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  StyledExperienceCardContainerDiv,
  StyledExperienceHeadDiv,
  StyledExperienceBodyDiv,
  StyledExperienceHeadLeftDiv,
  StyledExperienceHeadparagraph,
  StyledExperienceCardFooterWrapperDiv,
  StyledExperienceCardFooterTechnologyDiv,
} from "../styles/ExperienceCard.styled";
import { PiStudent } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";

const slideVariants = {
  end: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  start: { y: 100, opacity: 0 },
};

function ExperienceCard({
  icon,
  title,
  subTitle,
  descList,
  technologies,
  data,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("end");
    }
  }, [controls, inView]);

  return (
    <StyledExperienceCardContainerDiv
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="start"
      variants={slideVariants}
    >
      <StyledExperienceHeadDiv>
        <StyledExperienceHeadLeftDiv>
          {icon == "student" ? <PiStudent /> : <RiJavascriptFill />}
          <div>
            <p>{title}</p>
            <p>{subTitle}</p>
          </div>
        </StyledExperienceHeadLeftDiv>
        <StyledExperienceHeadparagraph>{data}</StyledExperienceHeadparagraph>
      </StyledExperienceHeadDiv>
      <StyledExperienceBodyDiv>
        <ul>
          {descList.map((bullet) => {
            return (
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="16"
                  fill="rgba(49,151,149,1)"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
                <span>{bullet}</span>
              </li>
            );
          })}
        </ul>
        <StyledExperienceCardFooterWrapperDiv>
          {technologies.map((tech) => (
            <StyledExperienceCardFooterTechnologyDiv>
              {tech}
            </StyledExperienceCardFooterTechnologyDiv>
          ))}
        </StyledExperienceCardFooterWrapperDiv>
      </StyledExperienceBodyDiv>
    </StyledExperienceCardContainerDiv>
  );
}

export default ExperienceCard;
