import styled from "styled-components";

export const StyledFooterContainerDiv = styled.div`
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.navbarBackground
      : props.theme.lightMode.navbarBackground;
  }};
  color: ${(props) =>
    props.theme.isDarkMode
      ? props.theme.darkMode.text
      : props.theme.lightMode.text};

  text-align: center;
  padding: 1em;

  p {
    margin: 0;
  }
`;
