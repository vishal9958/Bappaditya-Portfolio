import React from 'react';
import './About.css';
import { FaCode, FaDatabase, FaMobileAlt, FaCogs } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>

      <div className="about-content">
        <div className="about-left">
          <h3>Who I Am</h3>
          <p>
            I'm a 3rd-year B.Tech student and a passionate Web Developer focused on creating clean, responsive, and user-friendly websites and mobile interfaces.          </p>
          <p>
            I enjoy building modern UIs that not only look good but also provide a smooth experience across devices. Whether it's a personal portfolio, an e-commerce layout, or a mobile-first design — I aim to build real solutions with simple, effective code.          </p>
          <p>
            Currently, I'm sharpening my skills in full stack development and working on projects that combine design with functionality.          </p>
        </div>

        <div className="about-right">
          <div className="about-card">
            <FaCode className="icon" />
            <h4>Web Development</h4>
            <p>Creating responsive, accessible, and performant web applications</p>
          </div>
          <div className="about-card">
            <FaDatabase className="icon" />
            <h4>Backend Systems</h4>
            <p>Building scalable APIs and efficient database architectures</p>
          </div>
          <div className="about-card">
            <FaMobileAlt className="icon" />
            <h4>Responsive Design</h4>
            <p>Creating interfaces that work beautifully across all devices</p>
          </div>
          <div className="about-card">
            <FaCogs className="icon" />
            <h4>DevOps</h4>
            <p>Implementing CI/CD pipelines and cloud infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
