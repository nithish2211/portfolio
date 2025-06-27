import React from "react";
import { motion} from "framer-motion";
import fullImg from "./img/full2.png";
import fullImg2 from "./img/full2mob.png";

function Landing() {
  return (
    <section className="landing">
      <motion.div
        className="landing-text-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="landing-text">Shaping ideas <br />into reality</h1>
        <h2 className="landing-text2">Your vision my design</h2>
      </motion.div>

      <motion.div
        className="landing-image"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img src={fullImg} alt="Profile" className="desktop-img" />
        <img src={fullImg2} alt="Profile" className="mobile-img" />
      </motion.div>
    </section>
  );
}

export default Landing;
