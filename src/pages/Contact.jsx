import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact and Details</h1>

      <div className="contact-card">
        <div className="item">
          <span className="label">Education</span>
          <span>B.Tech Biotechnology</span>
        </div>

        <div className="item">
          <span className="label">Current Location</span>
          <span>Bangalore</span>
        </div>

        <div className="item">
          <span className="label">Native</span>
          <span>Tirunelveli, Tamil Nadu</span>
        </div>

        <div className="item">
          <span className="label">Mobile</span>
          <span>7868051895</span>
        </div>

        <div className="item">
          <span className="label">Email</span>
          <span>jaaronmathias61@gmail.com</span>
        </div>

        <div className="item">
          <span className="label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/aaron--mathias/"
            target="_blank"
            rel="noreferrer"
            title="https://www.linkedin.com/in/aaron--mathias/"
          >
            LinkedIn
          </a>
        </div>

        <div className="item">
          <span className="label">GitHub</span>
          <a
            href="https://github.com/Aaronmathias61"
            target="_blank"
            rel="noreferrer"
            title="https://github.com/Aaronmathias61"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;