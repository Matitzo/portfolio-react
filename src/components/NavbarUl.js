import { StyledNavbarUl } from "../styles/Navbar.styled";

export default function NavbarUl() {
  function handleScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <StyledNavbarUl>
      <li onClick={() => handleScroll("About")}>About</li>
      <li onClick={() => handleScroll("Experience")}>Experience</li>
      <li onClick={() => handleScroll("Projects")}>Projects</li>
      <li onClick={() => handleScroll("Contact")}>Contact</li>
    </StyledNavbarUl>
  );
}
