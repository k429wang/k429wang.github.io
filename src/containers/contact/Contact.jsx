import React from 'react';
import './contact.css';
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/email.png'
import github from '../../assets/github.png'
import ReactTooltip from 'react-tooltip';

export default function Contact() {
  return <div className='contact'>
      <div className='title dark-title'>Contact</div>
      {/* Social media links + icons */}
      <div className='links'>
        <a className="link" href="https://www.linkedin.com/in/k429wang/" target="_blank">             
            <img className="icon" src={linkedin} alt="linkedin" data-tip data-for="linkedinTip"></img>
            <ReactTooltip id="linkedinTip" place="bottom" effect="solid" offset={{'bottom': 10}} backgroundColor='white' textColor='black' delayShow={100}>LinkedIn</ReactTooltip>
        </a>
        <a className="link" href="mailto:k429wang@uwaterloo.ca" target="_blank">
            <img className="icon" src={email} alt="email" data-tip data-for="mailTip"></img>
            <ReactTooltip id="mailTip" place="bottom" effect="solid" offset={{'bottom': 10}} backgroundColor='white' textColor='black' delayShow={100}>Email</ReactTooltip>
        </a>
        <a className="link" href="https://github.com/k429wang" target="_blank">             
            <img className="icon" src={github} alt="linkedin" data-tip data-for="githubTip"></img>
            <ReactTooltip id="githubTip" place="bottom" effect="solid" offset={{'bottom': 10}} backgroundColor='white' textColor='black' delayShow={100}>GitHub</ReactTooltip>
        </a>
      </div>
  </div>;
}
