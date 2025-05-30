import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Laptop,
} from "lucide-react";
import EventNFT from './pic/Event-NFT.png'; // Your image for Project 1
import chainblockart from './pic/chainblockart.png'; // Your image for Project 2
import vectorium from './pic/vectorium.png'; // Your image for Project 3
import './App.css';

export function App() {
  // Project data array
  const projectData = [
    {
      title: "EVENT NFT",
      description: "Description for project 1, explaining key features and technologies used.",
      liveDemo: "https://eventnft.netlify.app/", // Add your live demo link
      code: "#", // Add your GitHub repo link
      image: EventNFT,
    },
    {
      title: "chainblockart",
      description: "Description for project 2, explaining key features and technologies used.",
      liveDemo: "https://chainblockart.netlify.app/", // Add your live demo link
      code: "https://github.com/sepool7/ChainblockTicket2277", // Add your GitHub repo link
      image: chainblockart,
    },
    {
      title: "vectorium",
      description: "Description for project 3, explaining key features and technologies used.",
      liveDemo: "https://vectorium.co/", // Add your live demo link
      code: "https://github.com/sepool7/Vectorium4.16", // Add your GitHub repo link
      image: vectorium,
    },
  ];

  return (
    <div className="app-container">
      <header className="header-container">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <motion.h1
            className="header-title"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            Hi, I am Sepideh Rajaei, I am a Frontend Developer
          </motion.h1>
          <motion.p
            className="header-description"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
          >
            Crafting beautiful & interactive web experiences
          </motion.p>
          <motion.div
            className="social-icons"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
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
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="icon-animation code-icon"
        >
          <Code size={60} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="icon-animation laptop-icon"
        >
          <Laptop size={60} />
        </motion.div>
      </header>

      <section className="about-section">
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="section-title"
  >
    About Me
  </motion.h2>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
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


      <section className="projects-section">
        <motion.h2
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>
        <div className="project-cards">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="project-card"
            >
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveDemo} className="project-link">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.code} className="project-link">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <motion.h2
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
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
          ].map((skill) => (
            <motion.div
              key={skill}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="skill-card"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
