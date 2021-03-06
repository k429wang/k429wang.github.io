import React from 'react';
import './navbar.css';
import {scroller} from 'react-scroll';

export default function Navbar() {

  // On button click scroll to the designated element
  function click(e){
    var content = e.target.textContent;
    var cap = content.charAt(0).toLowerCase() + content.slice(1)
    scroller.scrollTo(cap, {
      duration: 500,
      smooth: true,
    })
  }

  // On button mouse hover change text colour
  function hover(e){
      e.target.style.color = '#00fff2';
      e.target.style.transition = 'color 0.3s'
  }

  // Change text colour back to normal when mouse leave
  function leave(e){
    e.target.style.color = null;
  }

  return <div className='navbar'>
      <a className="item" onClick={click} onMouseEnter={hover} onMouseLeave={leave}>About</a>
      {/* <a className="item" onClick={click} onMouseEnter={hover} onMouseLeave={leave}>Projects</a> */}
      <a className="item" onClick={click} onMouseEnter={hover} onMouseLeave={leave}>Resume</a>
      <a className="item" onClick={click} onMouseEnter={hover} onMouseLeave={leave}>Contact</a>
  </div>;
}
