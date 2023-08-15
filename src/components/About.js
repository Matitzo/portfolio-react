import SectionDevider from "./SectionDevider";
import {
  StyledAboutContainerDiv,
  StyledAboutWrapperDiv,
} from "../styles/About.styled";

export default function About() {
  return (
    <StyledAboutContainerDiv>
      <SectionDevider number={"01"} text={"About"} />
      <StyledAboutWrapperDiv>
        <p>
          Hello and welcome to my portfolio! My name is <span>Mateusz</span> and
          I am a self-taught frontend developer specializing in{" "}
          <span>ReactJS</span>. My journey in programming started during my
          studies in geodesy, where I encountered programming for the first time
          and learned <span>Python</span> and <span>MySQL</span>. From that
          moment on, I knew that programming was my true passion.
        </p>
        <p>
          I have dedicated countless hours to mastering ReactJS and I am always
          eager to expand my skillset by learning new technologies and
          techniques. I take great pride in creating user-friendly and good
          looking web applications that provide seamless user experiences. My
          goal is to bring ideas to life and to help businesses and individuals
          achieve their online objectives.
        </p>
        <p>
          Aside from programming, I have a strong interest in science, gaming,
          technology, and fitness. I enjoy staying up-to-date with the latest
          developments in the tech industry, playing video games, and hitting
          the gym to stay active and healthy. When I have some free time I also
          like to read books.
        </p>
        <p>
          Thank you for taking the time to visit my portfolio. Please feel free
          to explore my projects and <span>get in touch</span> if you have any
          questions or if you would like to collaborate on a project.
        </p>
      </StyledAboutWrapperDiv>
    </StyledAboutContainerDiv>
  );
}
