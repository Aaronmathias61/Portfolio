import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* LEFT SIDE - IMAGE */}
      <div className="home-left">
        <img
          src="/Aaron.jpg"
          alt="Aaron"
          className="profile-img"
        />
      </div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="home-right">
        <h1>Introduction</h1>
        <p>
          Experienced and results-driven Java Spring Boot Developer with 5.5 years 
          of expertise in designing scalable, high-performance backend applications. 
          Proficient in developing RESTful APIs, integrating data persistence solutions, 
          and writing clean, efficient code. Passionate about collaborating with teams 
          to deliver innovative and impactful solutions. Seeking a challenging role 
          that allows me to contribute my expertise and grow professionally.
        </p>
      </div>

    </div>
  );
}

export default Home;