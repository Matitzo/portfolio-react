import React from "react";
import logoImg from "../images/logo.png";
import { StyledLogoWrapper } from "../styles/Logo.styled";

function Logo() {
  function handleScroll(elementId) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <StyledLogoWrapper onClick={() => handleScroll("logo")}>
      <img src={logoImg} alt="logo image" />
    </StyledLogoWrapper>
  );
}

export default Logo;
