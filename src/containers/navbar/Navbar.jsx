import React from 'react';
import './navbar.css';
import { scroller } from 'react-scroll';
import { FaHome, FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

export default function Navbar() {
  function click(e) {
    var content = e.target.textContent;
    console.log(e.target.id)
    console.log(e.target.classList)
    if (content) {
      console.log(content)
      var cap = content.charAt(0).toLowerCase() + content.slice(1);
      scroller.scrollTo(cap, {
        duration: 500,
        smooth: true,
      });
    } else if (e.target.classList.contains("home-icon")){
      scroller.scrollTo(0, {
        duration: 500,
        smooth: true,
      });
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-left" onClick={click}>
        <div className="icon home-icon" id="home">
          <FaHome />
        </div>
        <div className="item">About</div>
        <div className="item">Experience</div>
        <div className="item">Projects</div>
        <div className="item">Contact</div>
      </div>
      <div className="navbar-right">
        <a className="icon" href="https://github.com/k429wang" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a className="icon" href="https://linkedin.com/in/k429wang" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a className="icon" href="mailto:kdwang0917@gmail.com">
          <FaEnvelope />
        </a>
        <a className="icon" href="/resume.pdf" download="YourName_Resume.pdf">
          <FaFilePdf />
        </a>
      </div>
    </div>
  );
}