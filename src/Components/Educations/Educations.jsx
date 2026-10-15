import {

  GraduationCap,
  Sparkles
} from "lucide-react";


import "./Educations.css";

import SectionHeading from '../SectionHeading/SectionHeading'


function Education() {


  const education = [
    {
      degree: "M.Com",
      years: "2022 – 2024",
      institute: "University of Allahabad",
    },
    {
      degree: "B.Com",
      years: "2019 – 2022",
      institute: "Allahabad State University",
    },
    {
      degree: "Intermediate",
      years: "2017 – 2018",
      institute: "Allahabad Inter College",
    },
    {
      degree: "High School",
      years: "2015 – 2016",
      institute: "Allahabad Inter College",
    },
  ];

  return (
    <section className="section-wrap section-space" id="education">
      <SectionHeading
        eyebrow="EDUCATION & LEARNING"
        title="Learning never stops."
        description="My academic background and professional training."
      />
      <article className="certification-card">
        <div className="certification-icon"><Sparkles size={26} /></div>
        <div>
          <span className="eyebrow">PROFESSIONAL CERTIFICATION</span>
          <h3>Frontend Development With React.js</h3>
          <p>KP Group of Institution / Vinu Education Group</p>
          <span className="certification-date">20 May 2023 — 15 December 2023</span>
        </div>
      </article>

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <GraduationCap size={22} />
            <h3>{item.degree}</h3>
            <span>{item.years}</span>
            <p>{item.institute}</p>
          </article>
        ))}
      </div>


    </section>
  );
}

export default Education