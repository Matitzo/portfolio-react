import styled from "styled-components";

export const StyledSectionDeviderContainerDiv = styled.div`
  margin-bottom: 2.2em;
`;

export const StyledSectionDeviderWrapperDiv = styled.div`
  width: 50%;
  min-width: 600px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 765px) {
    width: 70%;
    min-width: 300px;
  }
`;

export const StyledSectionDeviderInfoWrapperDiv = styled.div`
  display: flex;
  gap: 0.5em;
  font-size: 1rem;
  margin: 0 1em;

  p {
    font-weight: bold;

    &:first-child {
      color: #38b2ac;
    }
  }
`;

export const StyledSectionDeviderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #454b76;
`;
