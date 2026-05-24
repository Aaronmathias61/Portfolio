import "./Projects.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
    id: "fleet",
    title: "Fleet Management System",
    bullets: [
      "Designed backend services for logistics operations including trip tracking, vehicle management, and operational monitoring systems.",
      "Implemented real-time tracking and route optimization features, improving fleet efficiency and reducing operational delays.",
      "Built driver performance evaluation systems based on safety metrics and operational data, improving accountability and insights.",
      "Developed REST APIs for seamless integration with external systems and real-time notification services.",
      "Optimized SQL queries and database operations, enabling efficient data retrieval for large-scale operational datasets.",
      "Designed scalable modules capable of handling high volumes of trip, vehicle, and operational data efficiently.",
      "Implemented event-driven notification mechanisms to provide real-time updates for logistics operations.",
      "Improved system throughput and performance through backend optimizations and efficient service interactions.",
      "Ensured high system reliability and availability during peak operational loads and critical business hours.",
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

  const active = params.id && PROJECTS.some((p) => p.id === params.id)
    ? PROJECTS.find((p) => p.id === params.id)
    : null;

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      {active ? (
        <div className="project-card" role="tabpanel">
          <h2>{active.title}</h2>
          <ul>
            {active.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="project-card">
          <h2>Select a project from the navbar</h2>
          <p>Please use the <strong>Projects</strong> menu in the navigation bar to open a specific project.</p>
          <p>Available projects:</p>
          <ul>
            <li>Transaction Processing System (Fintech)</li>
            <li>Order Lifecycle & Product Discovery (E‑Commerce)</li>
            <li>Healthcare Management System</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Projects;