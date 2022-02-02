import React from 'react';
import './navbar.css';
import {scroller} from 'react-scroll';

export default function Navbar() {

  function click(e){
    var content = e.target.textContent;
    var cap = content.charAt(0).toLowerCase() + content.slice(1)
    scroller.scrollTo(cap, {
      duration: 500,
      smooth: true,
    })
  }

  function hover(e){
      e.target.style.color = '#00fff2';
      e.target.style.transition = 'color 0.3s'
  }

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
