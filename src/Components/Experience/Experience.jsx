import {
    BriefcaseBusiness,
} from "lucide-react";


import "./Experience.css";

import SectionHeading from '../SectionHeading/SectionHeading'

function Experience() {
    return (
        <section className="section-wrap section-space" id="experience">
            <SectionHeading
                eyebrow="MY JOURNEY"
                title="Experience that builds confidence."
                description="My professional journey and the work I contribute to."
            />
            <article className="experience-card">
                <div className="experience-date">
                    <span className="experience-icon"><BriefcaseBusiness /></span>
                    <span>JUN 2024 — PRESENT</span>
                </div>
                <div className="experience-main">
                    <h3>Frontend Developer</h3>
                    <p className="company">CodeScriptors</p>
                    <p>
                        Developing and maintaining web applications, collaborating
                        with a team to build scalable interfaces, and integrating
                        frontend components with APIs using modern web technologies.
                    </p>
                    <div className="tag-list">
                        <span>React.js</span><span>JavaScript</span>
                        <span>REST APIs</span><span>Responsive UI</span>
                    </div>
                </div>
                <span className="experience-number">01</span>
            </article>
        </section>
    );
}

export default Experience