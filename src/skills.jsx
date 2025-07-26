import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss, SiDaisyui, SiFigma, SiCanva, SiAdobexd, SiAdobeillustrator, SiAdobephotoshop,
} from "react-icons/si";
import { MdGroups, MdAccessTime, MdRecordVoiceOver } from "react-icons/md";
import "./Skills.css";

const skillCategories = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 />, level: "90%" },
    { name: "CSS", icon: <FaCss3Alt />, level: "85%" },
    { name: "JavaScript", icon: <FaJs />, level: "90%" },
    { name: "React", icon: <FaReact />, level: "80%" },
  ],
  "UI Libraries": [
    { name: "Bootstrap", icon: <FaBootstrap />, level: "90%" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "90%" },
    { name: "DaisyUI", icon: <SiDaisyui />, level: "85%" },
    { name: "Framer Motion", icon: <SiTailwindcss />, level: "80%" }, // Assuming Framer Motion is similar to Tailwind for this example
  ],
  "UI/UX": [
    { name: "Figma", icon: <SiFigma />, level: "90%" },
    { name: "Canva", icon: <SiCanva />, level: "90%" },
    { name: "Adobe XD", icon: <SiAdobexd />, level: "80%" },
    { name: "Photoshop", icon: <SiAdobephotoshop />, level: "80%" },
    { name: "Illustrator", icon: <SiAdobeillustrator />, level: "75%" },
  ],
  "Soft Skills": [
    { name: "Communication", icon: <MdRecordVoiceOver />, level: "90%" },
    { name: "Teamwork", icon: <MdGroups />, level: "90%" },
    { name: "Time Management", icon: <MdAccessTime />, level: "90%" },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My <span>Skills</span></h2>
      <div className="skills-tabs">
        {Object.keys(skillCategories).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skillCategories[activeTab].map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-info">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
