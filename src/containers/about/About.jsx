import React from 'react';
import './about.css';
import face from '../../assets/face.png'

export default function About() {
  return <div className='about'>
    <div className="about-container">
      <div className="about-left">
        <img className="profile-image" src={face} alt="Profile" />
      </div>
      <div className="about-right">
        <h1>About Me</h1>
        <ul className="about-points">
          <li> 🏫 Computer Engineering @ University of Waterloo, specializing in Software Engineering</li>
          <li> 💻 Full-stack developer passionate about React, Python, Ruby on Rails, and C#/.NET</li>
          <li> 🎮 When not coding, you'll find me gaming, testing new recipes, and exploring the world</li>
          <li> 🎯 <strong>Seeking Fall 2025 Software Engineering internships</strong></li>
          {/* <li> 🎯 <strong>Seeking full-time software engineering roles starting Spring 2026</strong></li> */}
        </ul>
      </div>
    </div>
  </div>;
}
