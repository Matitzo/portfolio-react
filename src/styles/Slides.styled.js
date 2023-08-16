import styled from "styled-components";

export const StyledSlidesUl = styled.ul`
  margin: 0;
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
`;
