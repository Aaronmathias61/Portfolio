import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [openProjects, setOpenProjects] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (projectsRef.current && !projectsRef.current.contains(e.target)) {
        setOpenProjects(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <nav>
      <h2 className="name">Aaron Mathias</h2>
      <h2 className="name2">Java Spring Boot Dev</h2>

      <div className="links">

        <Link to="/" className="link">About</Link>

        {/* Projects Dropdown */}
        <div className={`dropdown ${openProjects ? "open" : ""}`} ref={projectsRef}>
          <button
            className="link dropdown-toggle"
            aria-expanded={openProjects}
            onClick={() => setOpenProjects((s) => !s)}
          >
            Projects ▾
          </button>
          <div className="dropdown-menu">
            <Link to="/projects/fleet" className="dropdown-item">Fleet Management</Link>
            <Link to="/projects/ecommerce" className="dropdown-item">E-Commerce</Link>
            <Link to="/projects/healthcare" className="dropdown-item">Healthcare</Link>
          </div>
        </div>

        {/* Experience Dropdown */}
        <div className={`dropdown ${openExperience ? "open" : ""}`}>
          <button
            className="link dropdown-toggle"
            aria-expanded={openExperience}
            onClick={() => setOpenExperience((s) => !s)}
          >
            Experience ▾
          </button>
          <div className="dropdown-menu">
            <Link to="/experience" className="dropdown-item">Overview</Link>
            <Link to="/experience" className="dropdown-item">Skills</Link>
            <Link to="/experience" className="dropdown-item">Work</Link>
          </div>
        </div>

        <Link to="/certifications" className="link">Certification</Link>
        <Link to="/contact" className="link">Contact</Link>

      </div>
    </nav>
  );
}

export default Navbar;