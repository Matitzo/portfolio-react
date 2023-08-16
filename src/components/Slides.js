import React from "react";
import {
  StyledProjectCardImg,
  StyledSlideContainer,
} from "../styles/ProjectCard.styled";
import { StyledSlidesUl } from "../styles/Slides.styled";

function Slides({ photo, descList }) {
  return (
    <StyledSlideContainer>
      <StyledProjectCardImg src={photo} loading="lazy"></StyledProjectCardImg>
      <StyledSlidesUl>
        {descList.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </StyledSlidesUl>
    </StyledSlideContainer>
  );
}

export default Slides;
