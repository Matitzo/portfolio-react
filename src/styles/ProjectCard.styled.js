import styled, { css } from "styled-components";

export const StyledProjectCardContainerDiv = styled.div`
  min-width: 600px;
  width: 50%;
  margin: 2em auto;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.projectInfoBg
      : props.theme.lightMode.projectInfoBg;
  }};

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
  width: calc(100% - 2px);
  border-radius: 0.375rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledProjectCardInfoWrapperDiv = styled.div`
  padding: 1em;
  border-radius: 0.375rem;

  h2 {
    font-size: 1.25rem;
    margin: 0;
    margin-bottom: 1em;
  }

  p {
    margin-bottom: 0;
  }
`;

export const StyledProjectCardSlidesContainer = styled.div`
  overflow: hidden;
`;

export const StyledProjectCardSlideWrapper = styled.div`
  display: flex;
  transition: transform 0.3s;

  ${(props) =>
    props.activeIndex &&
    css`
      transform: translate(-${props.activeIndex * 100}%);
    `}
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

export const StyledSlideContainer = styled.div`
  transition: transform 0.3s;
  min-width: 100%;
`;
