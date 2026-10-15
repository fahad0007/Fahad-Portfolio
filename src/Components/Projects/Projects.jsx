import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Layers3,
  Sparkles,

} from "lucide-react";

import apexLoads from '../../assets/Images/apex-loads.png'
import agentCrm from '../../assets/Images/agent-crm.png'
import healthPresso from '../../assets/Images/health.png'
import bbs from '../../assets/Images/bbs.png'
import adiba from '../../assets/Images/adiba.png'


import "./Projects.css";


import SectionHeading from '../SectionHeading/SectionHeading'

function Projects() {


    const projects = [
  {
    number: "01",
    name: "Adiba Healthcare Platform",
    type: "Healthcare",
      image: adiba,
      url: "https://adiba.ai/",
    description:
      "An online doctor consultation application designed to make healthcare services more accessible.",
    tech: ["React", "Redux", "Tailwind CSS"],
    icon: Heart,
  },
  {
    number: "02",
    name: "Apex Loads",
    type: "Logistics",
      image: apexLoads,
      url: "https://apexloads.com/",
    description:
      "A logistics platform focused on streamlining load management and transportation workflows.",
    tech: ["React", "REST APIs", "CSS"],
    icon: Layers3,
  },
  {
    number: "03",
    name: "Agent CRM",
    type: "Multi-Tenant SaaS",
      image: agentCrm,
      url: "https://www.agent-crm.com/1-optin-form-agent-crm-20",
    description:
      "A customer relationship management platform built to support agent workflows and business operations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    name: "Health Presso",
    type: "AI Platform",
      image: healthPresso,
      url: "https://www.healthespresso.com/",
    description:
      "An AI-focused platform with a frontend experience for healthcare-related workflows.",
    tech: ["React", "TypeScript", "Bootstrap"],
    icon: Sparkles,
  },
  {
    number: "05",
    name: "BBS College Website",
    type: "Education",
      image: bbs,
      url: "https://bbs.ac.in/",
    description:
      "A college website presenting institutional information and a user-friendly browsing experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    icon: GraduationCap,
  },
];
  return (
    <section className="section-wrap section-space projects-section" id="projects">
      <div className="section-row">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects I'm proud of."
          description="A selection of products and experiences I've worked on."
        />
        <span className="project-count">05 PROJECTS</span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const ProjectIcon = project.icon;

          return (
            <article className="project-card" key={project.number}>
              
              <div className="project-top">
                <span className="project-icon"><ProjectIcon size={25} /></span>
                <span className="project-number">{project.number}</span>
              </div>

<div className="project-image">
  <img
    src={project.image}
    alt={`${project.name} project preview`}
    loading="lazy"
  />

  <span className="project-image-label">
    {project.type}
  </span>
</div>


              <span className="project-type">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <a
                className="project-arrow"
                href={project.url}
                aria-label={`Ask me about ${project.name}`}
              >
                <ArrowUpRight size={20} />
              </a>
            </article>
          );
        })}
      </div>
      <p className="project-disclaimer">
        Project descriptions summarize the application areas. Add your
        actual project links and verified contributions before publishing.
      </p>
    </section>
  );
}


export default Projects