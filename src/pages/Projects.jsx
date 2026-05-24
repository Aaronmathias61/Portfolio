import "./Projects.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PROJECTS = [
  {
    id: "fintech",
    title: "Transaction Processing System (Fintech)",
    bullets: [
      "Architected a transaction processing system ensuring strict consistency guarantees, preventing duplication and partial transaction failures across services.",
      "Designed idempotent APIs and retry-safe workflows to handle transient failures and ensure repeatable execution.",
      "Implemented a ledger-based data model maintaining immutable financial records for reconciliation and audit compliance.",
      "Built asynchronous processing pipelines to decouple services, improving scalability and fault tolerance under heavy loads.",
      "Developed monitoring and alerting systems for anomaly detection and proactive issue resolution.",
      "Handled concurrency using transaction isolation and locking strategies to maintain strong data integrity across distributed components.",
      "Implemented validation, duplicate-prevention safeguards, and compensation/rollback strategies for partial failures.",
      "Optimized database operations (indexing and query tuning) to enable high-throughput processing with reduced latency.",
      "Leveraged Agentic AI workflows (Claude Sonnet 4.6, Anthropic Playbook) to validate designs and accelerate development.",
    ],
  },
  {
    id: "ecommerce",
    title: "Order Lifecycle & Product Discovery (E‑Commerce)",
    bullets: [
      "Engineered backend systems for order lifecycle management handling high-volume transactions across distributed services.",
      "Designed workflows for order placement, payment processing, state transitions, and tracking.",
      "Built advanced product discovery with filtering, sorting, pagination, and recommendation features for large datasets.",
      "Implemented robust inventory synchronization logic to manage concurrent updates and prevent stock inconsistencies at peak traffic.",
      "Integrated AWS S3 using pre-signed URLs for secure media handling and optimized content delivery.",
      "Improved system performance via API optimizations, caching strategies, and API versioning for backward compatibility.",
      "Monitored production using centralized logging and observability tools to ensure high availability and rapid issue resolution.",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Management System",
    bullets: [
      "Developed system for managing patient records, prescriptions, and medical history.",
      "Enabled secure access for doctors and patients (HIPAA-compliant).",
      "Built appointment scheduling and doctor filtering system.",
      "Implemented inventory tracking for medical supplies.",
      "Added video consultation and live chat features.",
      "Designed role-based access for admins, doctors, and patients.",
    ],
  },
];

function Projects() {
  const params = useParams();
  const navigate = useNavigate();

  const initial = params.id && PROJECTS.some((p) => p.id === params.id) ? params.id : PROJECTS[0].id;
  const [selected, setSelected] = useState(initial);

  useEffect(() => {
    if (params.id && params.id !== selected) {
      const exists = PROJECTS.some((p) => p.id === params.id);
      if (exists) setSelected(params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const active = PROJECTS.find((p) => p.id === selected);

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <div className="tabs" role="tablist" aria-label="Projects">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={selected === p.id}
            className={`tab-button ${selected === p.id ? "active" : ""}`}
            onClick={() => {
              setSelected(p.id);
              navigate(`/projects/${p.id}`);
            }}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="project-card" role="tabpanel">
        <h2>{active.title}</h2>
        <ul>
          {active.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;