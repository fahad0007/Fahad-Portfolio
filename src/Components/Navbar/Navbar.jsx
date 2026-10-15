
import {
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";

import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
    ["PersonalProjects", "#personal-projects"],
  ];

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">F.</span>
        <span>Fahad Ansari<span className="brand-dot">.</span></span>
      </a>

      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Let's Talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

export default Navbar