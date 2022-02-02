import React from 'react';
import './resume.css'
import resume from '../../assets/resume.png'
import resumepdf from '../../assets/resume.pdf'


export default function Resume() {
  return <div className='resume'>
      <div className="title resume-title">RESUME</div>
      <img className="resume-doc" src={resume}></img>
      <div><a href={resumepdf} target='_blank' download='Kai_Wang_Resume'>Download</a></div>
  </div>;
}
