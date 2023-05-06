import styled from "styled-components";

export const StyledHeaderContainerDiv = styled.div`
  text-align: center;
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

export const StyledHeaderWrapperDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 765px) {
    height: 100vw;
    min-height: 600px;
  }
`;

export const StyledHeaderHeaderTwo = styled.h2`
  margin: 0;
  display: flex;
  flex-direction: column;
  font-size: 3.75rem;

  span {
    color: #319795;
  }

  @media (max-width: 765px) {
    font-size: 2.25rem;
    margin: 0 0.5em;
  }
`;

export const StyledHeaderParagraph = styled.p`
  text-align: center;
  max-width: 50%;
  min-width: 600px;
  font-size: 1.5rem;
  margin-top: 2.5em;

  @media (max-width: 765px) {
    font-size: 1rem;
    width: 70%;
    min-width: 300px;
  }
`;

export const StyledHeaderButton = styled.button`
  background: #319795;
  font-size: 1.1rem;
  line-height: 2.5;
  margin-top: 2em;
  padding: 0 1em;
  border: none;
  border-radius: 90px;
  cursor: pointer;
  color: ${(props) =>
    !props.theme.isDarkMode
      ? props.theme.darkMode.text
      : props.theme.lightMode.text};

  &:hover {
    opacity: 0.9;
  }
`;
