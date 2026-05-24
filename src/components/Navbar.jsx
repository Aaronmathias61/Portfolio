import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [openProjects, setOpenProjects] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const [projectHovered, setProjectHovered] = useState(false);
  const [experienceHovered, setExperienceHovered] = useState(false);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const projectVisible = openProjects || projectHovered;
  const experienceVisible = openExperience || experienceHovered;

  useEffect(() => {
    function onDocClick(e) {
      if (projectsRef.current && !projectsRef.current.contains(e.target)) {
        setOpenProjects(false);
      }
      if (experienceRef.current && !experienceRef.current.contains(e.target)) {
        setOpenExperience(false);
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
        <div
          className={`dropdown ${projectVisible ? "open" : ""}`}
          ref={projectsRef}
          onMouseEnter={() => {
            setProjectHovered(true);
            setOpenExperience(false);
          }}
          onMouseLeave={() => setProjectHovered(false)}
        >
          <button
            className="link dropdown-toggle"
            aria-expanded={projectVisible}
            onClick={() => {
              setOpenProjects((s) => !s);
              setOpenExperience(false);
            }}
            type="button"
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
        <div
          className={`dropdown ${experienceVisible ? "open" : ""}`}
          ref={experienceRef}
          onMouseEnter={() => {
            setExperienceHovered(true);
            setOpenProjects(false);
          }}
          onMouseLeave={() => setExperienceHovered(false)}
        >
          <button
            className="link dropdown-toggle"
            aria-expanded={experienceVisible}
            onClick={() => {
              setOpenExperience((s) => !s);
              setOpenProjects(false);
            }}
            type="button"
          >
            Experience ▾
          </button>
          <div className="dropdown-menu">
            <Link to="/experience" className="dropdown-item">Overview</Link>
            <Link to="/experience/skills" className="dropdown-item">Skills</Link>
            <Link to="/experience/work" className="dropdown-item">Work</Link>
          </div>
        </div>

        <Link to="/certifications" className="link">Certification</Link>
        <Link to="/contact" className="link">Contact</Link>

      </div>
    </nav>
  );
}

export default Navbar;