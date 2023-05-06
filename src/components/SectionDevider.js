import {
  StyledSectionDeviderContainerDiv,
  StyledSectionDeviderWrapperDiv,
  StyledSectionDeviderInfoWrapperDiv,
  StyledSectionDeviderLine,
} from "../styles/SectionDevider.styled";

export default function SectionDevider({ number, text }) {
  return (
    <StyledSectionDeviderContainerDiv>
      <StyledSectionDeviderWrapperDiv>
        <StyledSectionDeviderInfoWrapperDiv>
          <p id={text}>{number}</p>
          <p>{text}</p>
        </StyledSectionDeviderInfoWrapperDiv>
        <StyledSectionDeviderLine></StyledSectionDeviderLine>
      </StyledSectionDeviderWrapperDiv>
    </StyledSectionDeviderContainerDiv>
  );
}
