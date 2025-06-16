import React from 'react';
import './Experience.css';
import { FaCheckCircle } from 'react-icons/fa';

const experiences = [
  {
    role: '3rd Year – React & UI/UX Focused Full Stack Projects',
    // company: 'TechNova Solutions',
    duration: '2024 – Present',
    points: [
      'Currently learning and building web apps using React.js with hooks, components, and state management.',
      'Working on creating responsive, mobile-first UIs using React and CSS frameworks.',
      'Focused on improving user experience (UX), implementing clean navigation, fast performance, and smooth animations.' ,
      'Building project ideas like e-commerce frontends, tourism websites, and dynamic dashboards using full stack approach.'
    ]
  },
  {
    role: '2nd Year – Backend and Full Stack Skills',
    // company: 'WebSphere Inc.',
    duration: '2023 - 2024',
    points: [
      'Explored backend development using Node.js, Express.js, and MySQL.',
      'Built small full-stack projects like login/signup system, to-do app, contact forms with database.',
      'Learned how to connect frontend and backend, handle REST APIs, and perform CRUD operations.',
      'Developed understanding of user authentication, routing, and database relationships.'
    ]
  },
  {
    role: '1st Year – Frontend Foundations',
    // company: 'Digital Creations',
    duration: '2022 - 2023',
    points: [
      'Started learning HTML, CSS, and JavaScript to build static and interactive websites.',
      'Built personal projects like portfolio pages, landing pages, and basic website templates.',
      'Gained strong understanding of layout design, responsive design using media queries, and form validations.',
      'Exploring tools like Figma for design collaboration and planning UI structure.'
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="work-section">
      <h2 className="section-title">
        Work <span className="gradient-text">Experience</span>
      </h2>

      <div className="timeline-wrapper">
        <div className="timeline-line" />
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-entry" key={index}>
              <div className="timeline-dot" />
              <div className="experience-card">
                <div className="experience-header">
                  <h3>{exp.role}</h3>
                  <span className="experience-date">{exp.duration}</span>
                </div>
                <p className="company-name">{exp.company}</p>
                <ul className="experience-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>
                      <FaCheckCircle className="tick-icon" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

