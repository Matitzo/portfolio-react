import styled from "styled-components";

export const StyledExperienceContainerDiv = styled.div`
  padding: 3em 0;
  color: ${(props) =>
    props.theme.isDarkMode
      ? props.theme.darkMode.text
      : props.theme.lightMode.text};
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.background
      : props.theme.lightMode.background;
  }};
`;

export const StyledExperienceWrapperDiv = styled.div`
  width: 50%;
  min-width: 600px;
  margin: 0 auto;

  @media (max-width: 765px) {
    width: 70%;
    min-width: 300px;
  }
`;
