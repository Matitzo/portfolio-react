import styled from "styled-components";

export const StyledContactContainerDiv = styled.div`
  text-align: center;
  padding: 2em 0;
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

export const StyledContactInfoWrapperDiv = styled.div`
  width: 50%;
  min-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;

  @media (max-width: 765px) {
    width: 70%;
    min-width: 300px;
    height: 25vh;
  }
`;

export const StyledHeadingTwo = styled.h2`
  margin: 0;
  line-height: 1.2;
  font-size: 1.875rem;
`;

export const StyledContactParagraph = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 1em 0 0.5em 0;
`;

export const StyledEmailParagraph = styled.p`
  color: #319795;
  margin: 0.5em 0;
`;

export const StyledIconContainer = styled.div`
  margin-top: 1em;
  a {
    margin: 0.5em;
    text-decoration: none;
    color: ${(props) =>
      props.theme.isDarkMode
        ? props.theme.darkMode.text
        : props.theme.lightMode.text};
  }
`;
