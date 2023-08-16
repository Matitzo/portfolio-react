import styled from "styled-components";

export const StyledPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5em;
  margin: 2em 0.5em;

  div {
    display: flex;
    gap: 0.5em;
  }

  @media (max-width: 900px) {
    gap: 2em;
  }
`;
