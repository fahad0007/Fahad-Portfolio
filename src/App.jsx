// import { Contact } from "lucide-react";
import Education from "./Components/Educations/Educations";
import Experience from "./Components/Experience/Experience";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About"
import Navbar from "./Components/Navbar/Navbar";
import PersonalProjects from "./Components/PersonalProjects/PersonalProjects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";



export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <PersonalProjects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
