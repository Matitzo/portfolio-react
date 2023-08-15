import styled from "styled-components";

export const StyledSkillsContainer = styled.div`
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

export const StyledSkillsWrapper = styled.div`
  width: 50%;
  min-width: 600px;
  margin: 0 auto;
  padding-top: 1em;
  padding-bottom: 2em;
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

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0 2em;
  margin: 0;
  display: flex;
  //   flex-direction: column;
  //   padding-right: 0;
  //   padding-left: 1em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(40px, auto);

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    margin: 0.2em 0;
  }

  @media (max-width: 765px) {
    display: flex;
    flex-direction: column;
    padding-right: 0;
    padding-left: 1em;
  }
`;
