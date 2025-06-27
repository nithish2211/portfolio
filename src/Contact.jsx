import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_t9ojoya',       // Replace with your service ID
      'template_7gul0xe',      // Replace with your template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'AT0Og2yOlUZpjdK0W'           // Replace with your public key (user ID)
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Failed to send message:", error.text);
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="contact-title"><span>Contact</span> Me</h2>
      <p className="contact-subtext">Have a project or just want to connect? Let's talk!</p>

      <div className="contact-icons">
        <a href="https://github.com/nithish2211" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/nithish-kumar-v-965b61371/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:nithish221103@gmail.com"><FaEnvelope /></a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </motion.section>
  );
};

export default Contact;
