import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { StyledAppWrapperDiv } from "./styles/App.styled";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const theme = {
    isDarkMode: isDarkMode,
    darkMode: {
      text: "white",
      background: "#1A202C",
      navbarBackground: "#171923",
      footerBackground: "#171923",
      cardBeckground: "#2D3748",
      data: "rgba(255, 255, 255, 0.92)",
      badgeText: "#bee3f8",
      badgeBg: "#2a4365",
      projectInfoBg: "#2D3748",
      buttonBg: "rgba(255, 255, 255, 0.08)",
      buttonHover: "rgba(45, 89, 114, 0.9)",
      modalNavbarBg: "#2D3748",
    },
    lightMode: {
      text: "black",
      background: "white",
      navbarBackground: "#EDF2F7",
      footerBackground: "#EDF2F7",
      cardBeckground: "white",
      data: "#1a202c",
      badgeText: "#2a4365",
      badgeBg: "#bee3f8",
      projectInfoBg: "white",
      buttonBg: "#EDF2F7",
      buttonHover: "rgba(208, 214, 220, 1)",
      modalNavbarBg: "white",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledAppWrapperDiv>
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={(value) => setIsDarkMode(value)}
        />
        <Main />
        <Footer />
      </StyledAppWrapperDiv>
    </ThemeProvider>
  );
}

export default App;
