import {
    ArrowRight,
    Code2,

} from "lucide-react";


import "./About.css";

import SectionHeading from '../SectionHeading/SectionHeading'


function About() {
    return (
        <section className="about section-wrap section-space" id="about">
            <div className="about-art">
                <div className="art-card">
                    <div className="art-symbol"><Code2 size={58} /></div>
                    <span>Curiosity meets creativity.</span>
                    <div className="art-lines"><i /><i /><i /></div>
                </div>

                <div className="tech-badge">
                    <span className="tech-status"></span>
                    Building with React.js
                </div>
                <div className="quote-card">
                    "Good design is not just how it looks, but how it works."
                </div>
            </div>

            <div className="about-copy">
                <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Passionate about building for the web." />
                <p>
                    I'm a frontend developer at CodeScriptors, working on modern
                    web applications across healthcare, logistics, CRM, and AI.
                    I enjoy transforming ideas into intuitive interfaces that look
                    beautiful and work smoothly across devices.
                </p>
                <p>
                    My core focus is React.js, JavaScript, and reusable UI
                    development. I value clean code, thoughtful user experiences,
                    and continuously improving my skills.
                </p>
                <a className="text-link" href="#contact">
                    Let's work together <ArrowRight size={17} />
                </a>
            </div>
        </section>
    );
}


export default About