import React from 'react';
import './header.css';
import {scroller} from 'react-scroll';
import { AnimatedBackground } from '../../animations/AnimatedBackground';
import Typewriter from 'typewriter-effect';

const phrases = [
  "Software Developer",  
  "Full Stack Developer",  
  "Web Developer",
  "Computer Engineer",
];

export default function Header() {
  function click(e){
    scroller.scrollTo('about', {
      duration: 500,
      smooth: true,
    });
  }

  return <div className="header">
    <AnimatedBackground />
    <div className="content">
      <h1 className="intro">Hello 👋! I'm Kai Wang.</h1>
      <div className="description">
        <div>I am a...</div>
        <Typewriter
          options={{
            strings: phrases,
            autoStart: true,
            loop: true,
            delay: 50, 
            deleteSpeed: 30, 
            pauseFor: 1000, 
          }}
        />
      </div>
      <button className="button" onClick={click}>Learn More</button>
    </div>
  </div>
}