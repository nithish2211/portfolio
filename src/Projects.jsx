import React from "react";
import "./Projects.css";
import nusole from './img/image.png';
import Todonix from './img/p11.png'
import portfolio from './img/portfolio.png';

const projects = [
  {
    title: "Todonix - A Task Managemer",
    description: "A task management app to organize your daily tasks efficiently.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: Todonix,
    live: "https://todonix.netlify.app",
    github: "https://github.com/nithish2211/portfolio",
  },
  {
    title: "NuSole- A Shoe Store",
    description: "A branded shoe store .",
    tech: ["React", "TailwindCss", "Framer Motion"],
    image: nusole,
    live: "https://nusole.netlify.app",
    github: "https://github.com/nithish2211/Shoe-ecom",
  },
  {
    title: "Nithish verse - A Personal Portfolio",
    description: "A personal portfolio to showcase my projects and skills.",
    tech: ["JavaScript","React", "API"],
    image: portfolio,
    live: "https://nithishverse.netlify.app",
    github: "https://github.com/nithish2211/portfolio",
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
