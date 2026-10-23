import {
  ArrowDown,
  ArrowRight,
  Code2,
  Coffee,
} from "lucide-react";


import "./Hero.css";

import profile from '../../assets/Images/Fahad-Photo.png'
function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <span className="availability">
          <span className="status-dot" />
          Frontend Developer
        </span>

        <p className="hero-intro">Hello, I'm</p>
        <h1>
          Fahad Ahamad
          <span>Ansari<span className="brand-dot">.</span></span>
        </h1>

        <h2>Turning ideas into beautiful web experiences.</h2>
        <p className="hero-description">
          Frontend developer with 2+ years of professional experience
          building responsive, user-friendly web applications using React
          and modern JavaScript technologies.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore My Work <ArrowRight size={17} />
          </a>
          <a className="button button-light" href="/resume.pdf" download>
            Download Resume <ArrowDown size={16} />
          </a>
        </div>


<div className="hero-proof"><div className="proof-avatars"><span>FA</span><span>✦</span><span>✓</span></div><p><strong>It's hard to read,</strong><br/>Than to write it.</p><div className="proof-divider"/><div className="proof-rating"><strong>✦ ✦ ✦ ✦ ✦</strong><small>First solve the problem, Then write the code</small></div></div>


        <div className="hero-meta">
          <a href="tel:8765440445">+91 87654 40445</a>
          <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=fahad.ansari.webdev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
            Email me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-orbit orbit-one" />
        <div className="portrait-orbit orbit-two" />
        <div className="portrait-frame">
          <img
            src={profile}
            alt="Fahad Ansari, frontend developer"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.parentElement.classList.add("portrait-fallback");
            }}
          />
          <div className="portrait-placeholder">
            <Code2 size={50} />
            <span>FA.</span>
          </div>
        </div>
        <div className="floating-note">
          <Coffee size={20} />
          <span>Building something<br />meaningful.</span>
        </div>




        
        <span className="visual-caption">DESIGN · DEVELOP · DELIVER</span>
      </div>
    </section>
  );
}

export default Hero