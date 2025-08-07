import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: "Vishal Bharat",
    desc: "Vishal Bharat is a comprehensive tourism listing website designed to showcase travel destinations across India..",
    tech: ["Html", "Css", "Javascript"],
    color: "linear-gradient(to right, #4f46e5, #9333ea)",
    live: "https://vishal9958.github.io/Vishal-Bharat-/",
    code: "https://github.com/vishal9958/Vishal-Bharat-",
    image: "https://i.ibb.co/HDnMs4GH/vishalbhart.png"
  },
  {
    title: "Ticket-Bot",
    desc: "The provided JavaScript code is for creating an interactive chatbot designed to assist users with booking tickets for events and museums. .",
    tech: ["JavaScript"],
    color: "linear-gradient(to right, #10b981, #06b6d4)",
    live: "https://vishal9958.github.io/TicketBot/",
    code: "https://github.com/vishal9958/TicketBot",
    image:"https://i.ibb.co/VpVwWw3H/ticket-bot.png"
  },
  {
    title: "Flappy Bird",
    desc: "Flappy Bird is a popular 2D side-scrolling mobile game developed by Dong Nguyen, under his game development company .",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "linear-gradient(to right, #a855f7, #ec4899)",
    live: "https://vishal9958.github.io/Flappy_Bird/",
    code: "https://github.com/vishal9958/Flappy_Bird",
    image:"https://i.ibb.co/gFrCs30g/flappybird.png"

  },
  {
    title: "Bapaaditya-portfolio",
    desc: "A personal portfolio site to showcase skills, projects, and contact information.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "linear-gradient(to right, #f59e0b, #ef4444)",
    live: "https://vishal9958.github.io/BAPPADITYA/",
    code: "https://github.com/vishal9958/BAPPADITYA",
    image:"https://i.ibb.co/TMXvwncp/portfolio.png"

  },
  {
    title: "Musify",
    desc: "Musify is a modern and stylish music streaming web application inspired by Spotify, built using React.js..",
    tech: ["React", "Tailwind"],
    color: "linear-gradient(to right, #6366f1, #3b82f6)",
    live: "https://vishal9958.github.io/Musify/",
    code: "https://github.com/vishal/blog-cms",
    image:"https://i.ibb.co/r2kgGjs1/musify.png"

  },
  {
    title: "Sky-Viewer",
    desc: "A simple weather app that displays real-time weather using OpenWeather API.",
    tech: ["React", "API", "CSS"],
    color: "linear-gradient(to right, #0ea5e9, #38bdf8)",
    live: "https://vishal9958.github.io/sky-viewer/",
    code: "https://github.com/vishal9958/sky-viewer",
    image:"https://i.ibb.co/ZR0tYMDP/sky-viewer.png"

  },
  {
    title: "Music_Tape",
    desc: "This music player is designed to provide a simple, interactive interface for listening to your favorite songs.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "linear-gradient(to right, #6d28d9, #9333ea)",
    live: "https://vishalchatapp.netlify.app",
    code: "https://github.com/vishal9958/Music_Tape",
    image:"https://i.ibb.co/39zKRjtd/musictape.png"

  },
  {
    title: "Pdf-Maker",
    desc: "it changes the image(png,jpg) to pdf",
    tech: ["Python"],
    color: "linear-gradient(to right, #10b981, #3b82f6)",
    live: "https://vishal9958.github.io/PDF_maker/netlify.app",
    code: "https://github.com/vishal9958/PDF_maker/blob/main/pdf.py",
    image:"https://i.ibb.co/LzyDT1XB/Screenshot-2025-08-08-004924.png"

  },
  {
    title: "Login Form",
    desc: "A simple and responsive login form allowing users to securely enter their email and password to access their account.",
    tech: ["HTML", "CSS"],
    color: "linear-gradient(to right, #14b8a6, #4ade80)",
    live: "https://vishal9958.github.io/Login-Form-2/",
    code: "https://github.com/vishal9958/Login-Form-2",
    image:"https://i.ibb.co/XkvJ1DDJ/login-form.png"

  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2><span className="gradient-text">My Projects</span></h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header" style={{ background: project.color }}>
  <img src={project.image} alt={project.title} className="project-img" />
</div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tags">
                {project.tech.map((tech, i) => (
                  <span className={`tag ${tech.toLowerCase().replace('.', '').replace(' ', '')}`} key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  <FaCode /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="project-button">
  <a href="https://github.com/vishal9958" target="_blank" rel="noreferrer">
    <button>View My All Projects</button>
  </a>
</div>

    </section>
  );
};

export default Projects;
