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
