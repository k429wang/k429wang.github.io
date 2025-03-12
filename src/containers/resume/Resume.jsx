import React from 'react';
import './resume.css'
import resume from '../../assets/resume.png'
import resumepdf from '../../assets/resume.pdf'


export default function Resume() {
  return <div className='resume'>
      <div className="title">Resume</div>
      <img className="resume-doc" src={resume}></img>
      <div className='download'><a href={resumepdf} target='_blank' download='Kai_Wang_Resume'>Download</a></div>
  </div>;
}
