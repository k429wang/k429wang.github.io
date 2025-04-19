import React from 'react';
import './navbar.css';
import { scroller } from 'react-scroll';
import { FaHome, FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import resumepdf from '../../assets/resume.pdf'

export default function Navbar() {
  function click(e) {
    const findHomeIcon = (element) => {
        if (!element) return false;
        if (element.classList?.contains("home-icon")) return true;
        return element.parentElement ? findHomeIcon(element.parentElement) : false;
    };

    const isHomeIcon = findHomeIcon(e.target);
                      
    if (isHomeIcon) {
        scroller.scrollTo("header", {
            duration: 500,
            smooth: true,
            offset: 0
        });
    } else {
        const content = e.target.textContent;
        if (content) {
            const cap = content.charAt(0).toLowerCase() + content.slice(1);
            scroller.scrollTo(cap, {
                duration: 500,
                smooth: true
            });
        }
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
        {/* <div className="item">Projects</div> */}
        <div className="item">Resume</div>
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
        <a className="icon" href={resumepdf} download="KaiWang_Resume.pdf">
          <FaFilePdf />
        </a>
      </div>
    </div>
  );
}