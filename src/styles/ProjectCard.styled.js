import styled from "styled-components";

export const StyledProjectCardContainerDiv = styled.div`
  min-width: 600px;
  width: 50%;
  margin: 2em auto;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 765px) {
    width: 70%;
    min-width: 300px;
  }
`;

export const StyledProjectCardImg = styled.img`
  width: 100%;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
`;

export const StyledProjectCardInfoWrapperDiv = styled.div`
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.projectInfoBg
      : props.theme.lightMode.projectInfoBg;
  }};
  padding: 1em;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;

  h2 {
    font-size: 1.25rem;
    margin: 0;
  }

  p {
    margin-bottom: 0;
  }
`;

export const StyledProjectCardButtonsWrapperDiv = styled.div`
  display: flex;
  gap: 1em;
  margin: 1.5em 0;

  button {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.2;
    height: 2.5rem;
    padding: 0 1em;
    border-radius: 0.375rem;
    color: #38b2ac;
    border: none;
    background: ${(props) => {
      return props.theme.isDarkMode
        ? props.theme.darkMode.buttonBg
        : props.theme.lightMode.buttonBg;
    }};

    &:hover,
    &:active {
      background: ${(props) => {
        return props.theme.isDarkMode
          ? props.theme.darkMode.buttonHover
          : props.theme.lightMode.buttonHover;
      }};
      cursor: pointer;
    }
  }
`;

export const StyledProjectCardTechWrapperDiv = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledProjectCardTechDiv = styled.div`
  color: ${(props) =>
    props.theme.isDarkMode
      ? props.theme.darkMode.badgeText
      : props.theme.lightMode.badgeText};
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.badgeBg
      : props.theme.lightMode.badgeBg;
  }};
  border-radius: 3px;
  padding: 0 0.5em;
  font-size: 0.9rem;
  font-weight: bold;
`;
