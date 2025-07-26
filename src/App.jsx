import React, { useState ,useEffect} from "react";
import Landing from "./Landing.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx"
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import "./App.css";
import resume from './img/resume.pdf';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    
    <div className="portfolio">
      {/* Header */}
      <header>
        <h1 className="name">Nithish Kumar</h1>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`links ${menuOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Sections */}
    <a
  href={resume}
  download
  title="Download Resume"
  style={{
    position: "fixed",
    bottom: "100px",
    right: isMobile ? "20px" : "40px",  // Dynamically update
    width: "70px",
    height: "50px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "20%",
    color: "#fff",
    fontWeight: "600",
    fontSize: "0.75rem",
    textAlign: "center",
    lineHeight: "50px",
    textDecoration: "none",
    zIndex: 999,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 0 8px rgba(255, 255, 255, 0.15)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.4)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 0 8px rgba(255,255,255,0.15)";
  }}
>
  Resume
</a>



      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer Navigation */}
      <footer className="bottom-nav">
        <a href="#about" className="nav-item">
          <p>About</p>
        </a>
        <a href="#skills" className="nav-item">
          <p>Skills</p>
        </a>
        <a href="#projects" className="nav-item">
          <p>Projects</p>
        </a>
        <a href="#contact" className="nav-item">
          <p>Contact</p>
        </a>
      </footer>
    </div>
  );
}

export default App;