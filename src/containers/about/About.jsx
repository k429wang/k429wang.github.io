import React from 'react';
import './about.css';

export default function About() {
  return <div className='about'>
    <div className='about-title'>ABOUT ME</div>
    <hr className='break'></hr>
    <div className='body'>
      Welcome to my personal website!<br></br><br></br>
      I am an entry-level web designer and software developer, with a 3.78 GPA and 2+ years of experience in Python, ReactJS and C++.<br></br><br></br>
      I have a passion for programming and problem solving, and I'm always eager to find unique solutions to challenging problems.<br></br><br></br>
      </div>
      {/* <img className="image" src={bucket_hat} alt='bucket_hat'></img>
      <img className="image" src={sunset} alt='sunset'></img> */}
    <hr className='break'></hr>
  </div>;
}
