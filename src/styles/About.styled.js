import styled from "styled-components";

export const StyledAboutContainerDiv = styled.div`
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

export const StyledAboutWrapperDiv = styled.div`
  width: 50%;
  min-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
  p {
    margin: 0;
    margin-top: 1em;

    &:first-child {
      margin-top: 0;
    }

    span {
      font-weight: bold;
      color: rgb(49, 151, 149);
    }
  }
  @media (max-width: 765px) {
    width: 70%;
    min-width: 300px;
  }
`;
