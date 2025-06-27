import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: "https://via.placeholder.com/400x200.png?text=Portfolio",
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Food Order App",
    description: "A full-stack MERN food ordering app with admin dashboard.",
    tech: ["React", "MongoDB", "Express", "Node.js"],
    image: "https://via.placeholder.com/400x200.png?text=Food+App",
    live: "https://foodapp.vercel.app",
    github: "https://github.com/yourusername/foodapp",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather updates using OpenWeatherMap API.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "https://via.placeholder.com/400x200.png?text=Weather+App",
    live: "https://weatherapp.vercel.app",
    github: "https://github.com/yourusername/weatherapp",
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title"><span>My</span> Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
