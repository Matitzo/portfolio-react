import { PiStudent } from "react-icons/pi";
import styled from "styled-components";

export const StyledExperienceCardContainerDiv = styled.div`
  margin: 2em 0;
  padding: 1em;
  color: ${(props) =>
    props.theme.isDarkMode
      ? props.theme.darkMode.text
      : props.theme.lightMode.text};
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.cardBeckground
      : props.theme.lightMode.cardBeckground;
  }};
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const StyledExperienceHeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledExperienceHeadLeftDiv = styled.div`
  display: flex;
  gap: 0.5em;
  margin-bottom: 0.5em;
  svg {
    width: 60px;
    height: 60px;
    min-width: 50px;
    color: rgb(49, 151, 149);
  }

  div {
    p {
      margin: 0;

      &:first-child {
        font-weight: bold;
      }
    }
  }
`;

export const StyledExperienceHeadparagraph = styled.p`
  color: ${(props) =>
    props.theme.isDarkMode
      ? props.theme.darkMode.data
      : props.theme.lightMode.data};
  margin: 0;
  margin-left: 0.5em;
`;

export const StyledExperienceBodyDiv = styled.div`
  ul {
    margin: 0 0 1.2em 0;
    padding: 0 1em;
    list-style-type: none;

    li::before {
      content: "";
      border-color: transparent rgb(49, 151, 149);
      border-style: solid;
      border-radius: 2px;
      border-width: 0.5em 0 0.5em 0.5em;
      display: block;
      height: 0;
      width: 0;
      left: -1em;
      top: 1.2em;
      position: relative;
    }
  }
`;

export const StyledExperienceCardFooterWrapperDiv = styled.div`
  margin-top: 2em;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

export const StyledExperienceCardFooterTechnologyDiv = styled.div`
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
