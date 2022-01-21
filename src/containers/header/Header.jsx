import React from 'react';
import './header.css';
import face from '../../assets/face.png'
import arrow from '../../assets/arrow.png'

/*
TODO
-create "learn more" button, maybe use onClick or onMouseEnter/onMouseLeave tags?
-need a javascript approach, save the distance of "about" div from the top of screen, then scroll that much?
-or just use html # by importing the different elements from their files
https://www.codegrepper.com/code-examples/javascript/onclick+scroll+to+div+react
https://upmostly.com/tutorials/react-onhover-event-handling-with-examples
*/

export default function Header() {

  function click(e){
    //Scroll down to anchor element
    console.log(2);
  }

  function hover(e){
      e.target.style.background = 'skyblue';
  }

  function leave(e){
    e.target.style.background = null;
}

  return <div className='header'>
    <img className='face' src={face} alt='face'></img>
    <div className='intro'>Hello&#x1F44B;! I am Kai Wang.</div>
    <p className='description'>
      I am a first-year Computer Engineering student at the University of Waterloo&#x1F3EB;.<br></br>
      I have a passion for software development and computer programming&#x1F4BB;.
    </p>
    <div className='button' onClick={click} onMouseEnter={hover} onMouseLeave={leave}>Learn more</div>
  </div>
}