import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_18mieyl",
        "template_sjbp4zr",
        form.current,
        "4qyMyZ_9IHnrk59t6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2><span className="gradient-text">Get In Touch</span></h2>

      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-card">
          <h3>Contact Information</h3>
          <div className="contact-info"><FaEnvelope /><div><strong>Email</strong><br />
vk6051950@gmail.com</div></div>
          <div className="contact-info"><FaPhone /><div><strong>Phone</strong><br />+91 9318395641</div></div>
          <div className="contact-info"><FaMapMarkerAlt /><div><strong>Location</strong><br />Gurgaon,Haryana</div></div>

          <h3 style={{ marginTop: "1.5rem" }}>Connect With Me</h3>
          <div className="social-icons">
            <a href="https://github.com/vishal9958" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/bappaditya-biswas-00959a276/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com/x_vishal05" target="_blank" rel="noreferrer"><FaInstagram /></a>
            
          </div>
        </div>

        {/* Right: Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h3>Send Me a Message</h3>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Subject</label>
          <input type="text" name="subject" required />
          <label>Message</label>
          <textarea name="message" required />
          <button type="submit">Send Message</button>
          {sent && <p style={{ color: "lightgreen", marginTop: "1rem" }}>✅ Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
