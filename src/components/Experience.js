import ExperienceCard from "./ExperienceCard";
import SectionDevider from "./SectionDevider";
import {
  StyledExperienceContainerDiv,
  StyledExperienceWrapperDiv,
} from "../styles/Experience.styled";

export default function Experience() {
  return (
    <StyledExperienceContainerDiv>
      <SectionDevider number={"02"} text={"Experience"} />
      <StyledExperienceWrapperDiv>
        <ExperienceCard />
      </StyledExperienceWrapperDiv>
    </StyledExperienceContainerDiv>
  );
}
