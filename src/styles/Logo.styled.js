import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  img {
    width: 140px;
  }
  &: hover {
    cursor: pointer;
  }

  @media (max-width: 470px) {
    img {
      width: 100px;
    }
  }
`;
