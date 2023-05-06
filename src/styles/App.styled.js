import styled from "styled-components";

export const StyledAppWrapperDiv = styled.div`
  background: ${(props) => {
    return props.theme.isDarkMode
      ? props.theme.darkMode.background
      : props.theme.lightMode.background;
  }};
`;
