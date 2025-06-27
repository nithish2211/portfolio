import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import abtImg from "./img/my.jpg";
import sslcIcon from "./img/scl.png";
import hscIcon from "./img/hscl.png";
import btechIcon from "./img/clh.png";

function About() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: -60 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={abtImg} alt="About" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="about-name">Nithish Kumar</h2>
          <h3 className="about-role">Web Developer</h3>
          <p className="about-description">
            I'm a passionate Web Developer & Designer skilled in HTML, CSS,
            JavaScript, React, and design tools like Figma, Photoshop, and Illustrator.
            I blend clean code with creative design to build seamless, user-focused digital experiences.
            Energetic, curious, and always motivated to turn ideas into impactful results.
          </p>

          <div className="education-timeline">
            <div className="education-item">
              <img src={sslcIcon} alt="SSLC" />
              <p className="edu-title">SSLC<br /><span>96.4%</span></p>
            </div>
            <div className="line"></div>
            <div className="education-item">
              <img src={hscIcon} alt="HSC" />
              <p className="edu-title">HSC<br /><span>94%</span></p>
            </div>
            <div className="line"></div>
            <div className="education-item">
              <img src={btechIcon} alt="B.Tech" />
              <p className="edu-title">B.Tech Computer Technology<br /><span>7.3 CGPA</span></p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
