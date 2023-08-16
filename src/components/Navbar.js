import React from "react";
import Logo from "./Logo";
import { useAnimation, motion } from "framer-motion";
import NavbarUl from "./NavbarUl";
import {
  StyledNavbarContainerDiv,
  StyledNavbarHamburgerDiv,
  StyledModalDiv,
  StyledModalContent,
} from "../styles/Navbar.styled";

const slideVariants = {
  end: { y: 0, transition: { duration: 0.3 } },
  start: { y: -70 },
};

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isModal, setIsModal] = React.useState(false);
  const [modalAnimation, setModalAnimation] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const controls = useAnimation();

  React.useEffect(() => {
    modalAnimation ? controls.start("end") : controls.start("start");
  }, [modalAnimation, controls]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function handlehmburgerClick() {
    setIsModal((prev) => !prev);
    setModalAnimation(true);
  }

  function handleIsModal(e) {
    if (e.target.id === "modal") {
      setModalAnimation(false);
      setTimeout(function () {
        setIsModal(false);
      }, 300);
    }
  }

  return (
    <StyledNavbarContainerDiv>
      <Logo isDarkMode={isDarkMode} />
      {isModal && (
        <StyledModalDiv id="modal" onClick={(e) => handleIsModal(e)}>
          <StyledModalContent
            id="modal-content"
            as={motion.div}
            animate={controls}
            initial={isModal ? "start" : "end"}
            variants={slideVariants}
          >
            <NavbarUl />
          </StyledModalContent>
        </StyledModalDiv>
      )}
      <div>
        {windowWidth > 765 && <NavbarUl />}
        {isDarkMode ? (
          <svg
            onClick={() => setIsDarkMode((prevData) => !prevData)}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            class="bi bi-toggle-on"
            viewBox="0 0 16 16"
          >
            <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </svg>
        ) : (
          <svg
            onClick={() => setIsDarkMode((prevData) => !prevData)}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-toggle-off"
            viewBox="0 0 16 16"
          >
            <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
          </svg>
        )}
        {windowWidth <= 765 && (
          <StyledNavbarHamburgerDiv onClick={() => handlehmburgerClick()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={isDarkMode ? "white" : "black"}
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </StyledNavbarHamburgerDiv>
        )}
      </div>
    </StyledNavbarContainerDiv>
  );
}
