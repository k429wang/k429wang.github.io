import React from 'react';
import './header.css';
import {scroller} from 'react-scroll';
import { AnimatedBackground } from '../../animations/AnimatedBackground';
import Typewriter from 'typewriter-effect';

const phrases = [
  "Software Developer",
  "Computer Engineer",
  "Web Developer",
  "Full Stack Developer",
];

export default function Header() {
  // On button click scroll to the about section with navbar on top of screen
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
            pauseFor: 2000, 
          }}
        />
      </div>
      <button className="button" onClick={click}>Learn More</button>
    </div>
  </div>
}