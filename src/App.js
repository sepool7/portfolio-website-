import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Laptop,
} from "lucide-react";
import EventNFT from './pic/Event-NFT.png';
import chainblockart from './pic/chainblockart.png';
import vectorium from './pic/vectorium.png';
import './App.css';

export function App() {
  const [activeSection, setActiveSection] = useState("header");

  const projectData = [
    {
      title: "EVENT NFT",
      description: "Description for project 1, explaining key features and technologies used.",
      liveDemo: "https://eventnft.netlify.app/",
      code: "#",
      image: EventNFT,
    },
    {
      title: "chainblockart",
      description: "Description for project 2, explaining key features and technologies used.",
      liveDemo: "https://chainblockart.netlify.app/",
      code: "https://github.com/sepool7/ChainblockTicket2277",
      image: chainblockart,
    },
    {
      title: "vectorium",
      description: "Description for project 3, explaining key features and technologies used.",
      liveDemo: "https://vectorium.co/",
      code: "https://github.com/sepool7/Vectorium4.16",
      image: vectorium,
    },
  ];

  useEffect(() => {
    const sections = ["header", "about", "projects", "skills", "contact"];
    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let i = 0; i < sections.length; i++) {
        const elem = document.getElementById(sections[i]);
        if (!elem) continue;
        if (elem.offsetTop <= scrollPos && (elem.offsetTop + elem.offsetHeight) > scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={"app-container"}>

      {/* Navigation Dots */}
      <nav className="nav-dots" aria-label="Section navigation">
        {["header", "about", "projects", "skills", ].map((section) => (
          <button
            key={section}
            className={`nav-dot ${activeSection === section ? "active" : ""}`}
            onClick={() => scrollToSection(section)}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </nav>

      {/* Header Section */}
      <header id="header" className="header-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="header-title"
            variants={fadeUpVariant}
            transition={{ delay: 0.2 }}
          >
            Hi, I am Sepideh Rajaei, I am a Frontend Developer
          </motion.h1>
          <motion.p
            className="header-description"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.4 }}
          >
            Crafting beautiful & interactive web experiences
          </motion.p>
          <motion.div
            className="social-icons"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://github.com/sepool7" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sepid-rajaei/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rajaei.sepideh77@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="icon-animation code-icon"
        >
          <Code size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="icon-animation laptop-icon"
        >
          <Laptop size={60} />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-text"
        >
          I am a dedicated Frontend Developer with a strong eye for design and a love for crafting intuitive user interfaces. My journey into web development started with a fascination for how websites worked, which quickly grew into a passion for building interactive and engaging digital experiences.
          <br /><br />
          With experience in modern JavaScript frameworks like React and a solid foundation in HTML, CSS, and TypeScript, I strive to write clean, efficient, and maintainable code. I enjoy tackling challenging problems and continuously learning new technologies to stay current in the fast-paced world of web development.
          <br /><br />
          When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee.
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>
        <div className="project-cards">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(155, 84, 255, 0.4)" }}
              className="project-card"
            >
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.code} className="project-link" target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills & Technologies
        </motion.h2>
        <div className="skills-grid">
          {[
            "React",
            "JavaScript",
            "TypeScript",
            "Next.js",
            "TailwindCSS",
            "Git",
          ].map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ scale: 1.1, boxShadow: "0 6px 15px rgba(123, 66, 187, 0.5)" }}
              className="skill-card"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
      <div className="contact-background-animation" />
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="contact-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello—feel free to reach out.
        </motion.p>
        <div className="social-icons contact-icons">
          <a href="mailto:rajaei.sepideh77@gmail.com" className="social-icon">
            <Mail size={24} />
          </a>
          <a href="https://github.com/sepool7" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sepid-rajaei/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}
