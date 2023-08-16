import React from "react";
import logoImgLight from "../images/logo2-light.png";
import logoImgDark from "../images/logo2-dark.png";
import { StyledLogoWrapper } from "../styles/Logo.styled";

function Logo({ isDarkMode }) {
  function handleScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <StyledLogoWrapper onClick={() => handleScroll("logo")}>
      <img src={!isDarkMode ? logoImgDark : logoImgLight} alt="logo image" />
    </StyledLogoWrapper>
  );
}

export default Logo;
