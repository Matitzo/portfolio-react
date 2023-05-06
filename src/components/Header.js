import {
  StyledHeaderContainerDiv,
  StyledHeaderWrapperDiv,
  StyledHeaderHeaderTwo,
  StyledHeaderParagraph,
  StyledHeaderButton,
} from "../styles/Header.styled";

export default function Header() {
  function handleClick() {
    const element = document.getElementById("Contact");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <StyledHeaderContainerDiv>
      <StyledHeaderWrapperDiv>
        <StyledHeaderHeaderTwo>
          Hi, my name is Mateusz. <span>I'm a fronted developer.</span>
        </StyledHeaderHeaderTwo>
        <StyledHeaderParagraph>
          I specialize in front-end development using React.js, creating good
          looking and responsive user interfaces.
        </StyledHeaderParagraph>
        <StyledHeaderButton onClick={() => handleClick()}>
          Contact me!
        </StyledHeaderButton>
      </StyledHeaderWrapperDiv>
    </StyledHeaderContainerDiv>
  );
}
