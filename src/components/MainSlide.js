import React from "react";
import {
  StyledProjectCardImg,
  StyledSlideContainer,
} from "../styles/ProjectCard.styled";

function MainSlide({ photo, desc }) {
  return (
    <StyledSlideContainer>
      <StyledProjectCardImg src={photo} loading="lazy"></StyledProjectCardImg>
      <p>{desc}</p>
    </StyledSlideContainer>
  );
}

export default MainSlide;
