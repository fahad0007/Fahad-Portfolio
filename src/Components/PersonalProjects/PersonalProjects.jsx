
import { useState } from "react";
import "./PersonalProjects.css";
import SectionHeading from "../SectionHeading/SectionHeading";

function WebsitePreview({ url, title }) {
  const [imageError, setImageError] = useState(false);

  const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    url
  )}?w=1000`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="personal-project-preview"
      aria-label={`View live ${title} website`}
    >
      {!imageError ? (
        <img
          src={screenshotUrl}
          alt={`${title} website preview`}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="preview-placeholder">
          <span>&lt;/&gt;</span>
          <h4>{title}</h4>
          <p>View live website ↗</p>
        </div>
      )}

      <span className="preview-overlay">
        View Website ↗
      </span>
    </a>
  );
}

function PersonalProjects() {
  const personalProjects = [
    {
      title: "Zeel Sofa",
      description:
        "A modern furniture website featuring elegant sofa designs, responsive layouts, and a premium shopping experience.",
      tech: ["React", "CSS", "JavaScript"],
      url: "https://zeelsofa.vercel.app",
      showcase: "https://zeelsofa.vercel.app/",
      github: "https://github.com/fahad0007/Zeel-Sofa",
    },
    {
      title: "NetFlix Clone",
      description:
        "A Netflix clone is a front-end web application that replicates the user interface, video playback, and catalog-browsing experience of the popular on-demand streaming service.",
      tech: ["React", "CSS", "Lucide React"],
      url: "https://netflix-clone-react-1.vercel.app/",
      showcase: "https://netflix-clone-react-1.vercel.app/",
      github: "https://github.com/fahad0007/netflix-clone-react",
    },
    {
      title: "Vilocity Motors",
      description:
        "A responsive premium automotive showcase built with React + Vite. Includes category filters, search, sorting, saved cars, vehicle detail modals, and an enquiry flow.",
      tech: ["React", "JavaScript", "Lucide React"],
      url: "https://vilocity-motors01.vercel.app/",
      showcase: "https://vilocity-motors01.vercel.app/",
      github: "https://github.com/fahad0007/Vilocity-Motors",
    },
    {
      title: "Velvet & Roast",
      description:
        "A responsive cafe/restaurant landing page with a warm classic-modern visual style.",
      tech: ["React", "JavaScript", "Lucide React"],
      url: "https://velvet-and-roast.vercel.app/",
      showcase: "https://velvet-and-roast.vercel.app/",
      github: "https://github.com/fahad0007/VELVET-ROAST",
    },
    {
      title: "Fancy EVehicle ",
      description:
        "An Electric Vehicle (EV) is a vehicle that uses one or more electric motors powered by rechargeable battery packs instead of a traditional internal combustion engine.",
      tech: ["React", "CSS", "Lucide React"],
      url: "https://fancy-ev.vercel.app/",
      showcase: "https://fancy-ev.vercel.app/",
      github: "https://github.com/fahad0007/Fancy-E-Rickshaw",
    },
  ];

  return (
    <section id="personal-projects" className="projects-section">
      <SectionHeading
        eyebrow="MY WORKS"
        title="Personal Projects."
        description="Things I've built to explore ideas, solve problems, and improve my frontend development skills."
      />

      <div className="projects-grid">
        {personalProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <WebsitePreview
              url={project.url}
              title={project.title}
            />

            <div className="project-top">
              <div className="project-icon">&lt;/&gt;</div>
              <span className="project-type">Personal Project</span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.showcase}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-link"
              >
                Live Showcase <span aria-hidden="true">↗</span>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                aria-label={`GitHub repository for ${project.title}`}
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PersonalProjects;
