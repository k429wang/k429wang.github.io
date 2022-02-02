import React from 'react';
import './contact.css';
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/email.png'
import github from '../../assets/github.png'

export default function Contact() {
  return <div className='contact'>
      <div className='title dark-title'>Contact</div>
      <div className='links'>
        <a className="link" href="https://www.linkedin.com/in/k429wang/" target="_blank">             
            <img className="icon" src={linkedin} alt="linkedin"></img>
        </a>
        <a className="link" href="mailto:k429wang@uwaterloo.ca" target="_blank">
            <img className="icon" src={email} alt="email"></img>
        </a>
        <a className="link" href="https://github.com/k429wang" target="_blank">             
            <img className="icon" src={github} alt="linkedin"></img>
        </a>
      </div>
  </div>;
}
