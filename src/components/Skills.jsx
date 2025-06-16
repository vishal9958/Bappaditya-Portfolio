import React from 'react';
import './Skills.css';
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaPython,
  FaGit,
} from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2><span className="gradient-text">My Skills</span></h2>

      <div className="skill-boxes">
        {/* Frontend */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li><span>HTML/CSS <span>95%</span></span><div className="bar" style={{ width: '95%' }}></div></li>
            <li><span>JavaScript <span>80%</span></span><div className="bar" style={{ width: '80%' }}></div></li>
            <li><span>React <span>85%</span></span><div className="bar" style={{ width: '85%' }}></div></li>
            <li><span>React.js <span>60%</span></span><div className="bar" style={{ width: '80%' }}></div></li>
            <li><span>Tailwind CSS <span>70%</span></span><div className="bar" style={{ width: '70%' }}></div></li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li><span>Node.js <span>85%</span></span><div className="bar" style={{ width: '85%' }}></div></li>
            <li><span>Express <span>90%</span></span><div className="bar" style={{ width: '90%' }}></div></li>
            <li><span>Python <span>75%</span></span><div className="bar" style={{ width: '75%' }}></div></li>
            <li><span>MongoDB <span>50%</span></span><div className="bar" style={{ width: '50%' }}></div></li>
            <li><span>SQL <span>85%</span></span><div className="bar" style={{ width: '85%' }}></div></li>
          </ul>
        </div>

        {/* Tools */}
        <div className="skill-category">
          <h3>Tools & Others</h3>
          <ul>
            <li><span>Git <span>90%</span></span><div className="bar" style={{ width: '90%' }}></div></li>
            <li><span>Docker <span>75%</span></span><div className="bar" style={{ width: '75%' }}></div></li>
            <li><span>AWS <span>70%</span></span><div className="bar" style={{ width: '70%' }}></div></li>
            <li><span>Canva <span>80%</span></span><div className="bar" style={{ width: '80%' }}></div></li>
            <li><span>Figma <span>65%</span></span><div className="bar" style={{ width: '65%' }}></div></li>
          </ul>
        </div>
      </div>

      {/* Technologies */}
      <h3 className="gradient-text">Technologies I Work With</h3><br></br>
      <div className="tech-icons">
        <div className="icon"><FaReact /><p>React</p></div>
        <div className="icon"><FaNodeJs /><p>Node.js</p></div>
        <div className="icon"><FaJsSquare /><p>JavaScript</p></div>
        <div className="icon"><FaCss3Alt /><p>CSS3</p></div>
        <div className="icon"><FaHtml5 /><p>HTML5</p></div>
        <div className="icon"><FaBootstrap /><p>Bootstrap</p></div>
        <div className="icon"><FaPython /><p>Python</p></div>
        <div className="icon"><FaGit /><p>Git</p></div>
      </div>
    </section>
  );
};

export default Skills;
