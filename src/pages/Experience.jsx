import { useParams } from "react-router-dom";
import "./Experience.css";

const sections = {
  overview: {
    title: "Overview",
    description:
      "Experienced and results-driven Java Spring Boot Developer with 5.5 years of expertise in building scalable, high-performance backend applications.",
    items: [
      "Designed and delivered backend services for logistics, e-commerce, healthcare, and fintech domains.",
      "Implemented consistent transaction workflows, idempotent APIs, and distributed processing pipelines.",
      "Collaborated with cross-functional teams in Agile environments to deliver reliable, production-grade systems.",
    ],
  },
  skills: {
    title: "Skills",
    description: "The core technical and professional skills that fuel my contributions.",
    items: [
      { label: "Languages", value: "Java, SQL" },
      { label: "Frameworks & Libraries", value: "Spring Boot, Spring MVC, Spring Data JPA, Hibernate" },
      { label: "Databases & Storage", value: "MySQL, PostgreSQL, MongoDB, TimescaleDB, InfluxDB" },
      { label: "Cloud & Infrastructure", value: "AWS" },
      { label: "DevOps & Tools", value: "Docker, Kubernetes, Jenkins, Git, Kibana" },
      { label: "Integrations & Services", value: "Stripe, Twilio Messaging Service" },
      { label: "Core Competencies", value: "Microservices Architecture, REST APIs, System Design, Resilience Patterns, CI/CD Pipelines" },
      { label: "AI-Assisted Development", value: "Claude (Sonnet 4.6), Anthropic Playbook" },
      { label: "Methodologies", value: "Agile, Scrum" },
    ],
  },
  work: {
    title: "Work",
    description: "Employment history and roles.",
    items: [
      { company: "VWR (part of Avantor)", title: "Software Engineer", dates: "May 2019 - June 2022" },
      { company: "Medyaan Healthcare private limited", title: "Software Engineer", dates: "July 2022 - October 2024" },
      { company: "Accenture", title: "Senior Analyst", dates: "December 2024 - Present" },
    ],
  },
};

function Experience() {
  const { section } = useParams();
  const activeSection = section ? section.toLowerCase() : "overview";
  const sectionData = sections[activeSection] || sections.overview;

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="experience-content">
        <h2>{sectionData.title}</h2>
        <p>{sectionData.description}</p>
        {activeSection === "skills" ? (
          <div className="skills-grid">
            {sectionData.items.map((item, index) => (
              <div key={index} className="skill-row">
                <span className="skill-label">{item.label}</span>
                <span className="skill-colon">:</span>
                <span className="skill-value">{item.value}</span>
              </div>
            ))}
          </div>
        ) : activeSection === "work" ? (
          <div className="work-list">
            {sectionData.items.map((item, index) => (
              <div key={index} className="work-item">
                <h3>{item.company}</h3>
                <p>{item.title}</p>
                <p className="work-dates">{item.dates}</p>
              </div>
            ))}
          </div>
        ) : (
          sectionData.items.map((item, index) => (
            <p key={index} className="experience-item">{item}</p>
          ))
        )}
      </div>
    </div>
  );
}

export default Experience;