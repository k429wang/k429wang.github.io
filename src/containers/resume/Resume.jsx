import React from 'react';
import './resume.css'
import resume from '../../assets/resume.png'


export default function Resume() {
  return <div className='resume'>
      <div className="title">RESUME</div>
      <img className="resume-doc" src={resume}></img>
  </div>;
}
