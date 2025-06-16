import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hi, I'm <span className="name-gradient">Bappaditya Biswas</span></h1>
        <h2>Web Developer</h2>
        <p>
          I build exceptional digital experiences with modern technologies.<br />
          Passionate about creating elegant solutions to complex problems.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn filled">View My Work</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="profile-ring">
          <div className="profile-icon">👤</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
