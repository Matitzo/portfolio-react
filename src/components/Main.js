import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
//import TextShpere from "./Canvas";
import { SimpleCloud } from "./Canvas_2";
import TextShpere from "./Canvas";
import Skills from "./Skills";

export default function Main() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
