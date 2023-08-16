import styled from "styled-components";

export const StyledNavbarContainerDiv = styled.div`
  position: fixed;
  width: calc(100% - 6em);
  min-height: 70px;
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.navbarBackground
      : props.theme.lightMode.navbarBackground;
  }};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  z-index: 9999;

  div {
    display: flex;
    align-items: center;
  }
  padding-right: 3em;
  padding-left: 3em;

  @media (max-width: 765px) {
    width: calc(100% - 2em);
    padding-right: 1em;
    padding-left: 1em;
  }
`;

export const StyledNavbarUl = styled.ul`
  margin: 0;
  padding: 1em;
  display: flex;
  width: fit-content;
  list-style-type: none;
  flex-wrap: wrap;
  li {
    margin: 0 1em;
    padding: 0.5em;
    border-radius: 5px;
    color: ${(props) =>
      props.theme.isDarkMode
        ? props.theme.darkMode.text
        : props.theme.lightMode.text};

    &:hover,
    &:focus {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.08);
    }
  }

  @media (max-width: 765px) {
    width: 100%;
    justify-content: space-around;
    padding: 1em 0.5em;

    li {
      margin: 0;
    }
  }

  @media (max-width: 340px) {
    li {
      font-size: 0.9rem;
    }
  }
`;

export const StyledNavbarHamburgerDiv = styled.div`
  margin-left: 2em;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.3em;
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

export const StyledModalDiv = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const StyledModalContent = styled.div`
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.modalNavbarBg
      : props.theme.lightMode.modalNavbarBg;
  }};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
