import {
    ArrowUpRight,

} from "lucide-react";

import "./Skills.css";

import SectionHeading from '../SectionHeading/SectionHeading'

function Skills() {


    const skills = [
        "React.js",
        "JavaScript",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Redux",
        "Context API",
        "REST APIs",
        "Tailwind CSS",
        "Bootstrap",
        "Git & GitHub",
    ];

    return (
        <section className="section-wrap section-space" id="skills">
            <SectionHeading
                eyebrow="MY TOOLKIT"
                title="Technologies I work with."
                description="Tools and technologies I use to build modern web experiences."
            />
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-item" key={skill}>
                        <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                        <span>{skill}</span>
                        <ArrowUpRight size={16} className="skill-arrow" />
                    </div>
                ))}
            </div>
        </section>
    );
}


export default Skills