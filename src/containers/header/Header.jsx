import React from 'react';
import './header.css';
import face from '../../assets/face.png'
import {scroller} from 'react-scroll';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'; 

export default function Header() {

  // On button click scroll to the about section with navbar on top of screen
  function click(e){
    scroller.scrollTo('navbar', {
      duration: 500,
      smooth: true,
    });
  }

  // On button mouse hover change background colour
  function hover(e){
      e.target.style.background = '#29a6ff';
      e.target.style.transition = 'background 0.5s'
  }

  // Change button background colour back to normal when mouse leaves
  function leave(e){
    e.target.style.background = null;
  }

  return (<div className='header'>
    <ParallaxProvider>
      {/* Parallax scrolling -> header scrolls slower than rest of page */}
      <Parallax speed={-15}>
        <div>
          <img className='face' src={face} alt='face'></img>
          <div className='intro'>Hello&#x1F44B;! I am Kai Wang.</div>
          <p className='description'>
            I am a first-year Computer Engineering student at the University of Waterloo&#x1F3EB;.<br></br>
            I have a passion for software development and computer programming&#x1F4BB;.
          </p>
          <div className='button' onClick={click} onMouseEnter={hover} onMouseLeave={leave}>Learn more</div>
        </div>
      </Parallax>
    </ParallaxProvider>
  </div>)
}