import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Canvas from "./Canvas";

export default function Main() {
  return (
    <div>
      <Header />
      <About />
      <Canvas />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
