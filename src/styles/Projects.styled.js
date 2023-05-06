import styled from "styled-components";

export const StyledProjectsContainerDiv = styled.div`
  color: ${(props) =>
    props.theme.isDarkMode
      ? props.theme.darkMode.text
      : props.theme.lightMode.text};
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.background
      : props.theme.lightMode.background;
  }};
  padding: 3em 0;
`;
