import React, { useState } from "react";
import Landing from "./Landing";
import About from "./About";
import Skills from "./skills"
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

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
