import React from 'react';
import './navbar.css';
import {scroller} from 'react-scroll';
import {scroll} from './scroll.js'

export default function Navbar() {

  function hover(e){
      e.target.style.color = '#00fff2';
      e.target.style.transition = 'color 0.3s'
  }

  function leave(e){
    e.target.style.color = null;
  }

  return <div className='navbar'>
      <a className="item" onClick={scroll} onMouseEnter={hover} onMouseLeave={leave}>About</a>
      <a className="item" onClick={scroll} onMouseEnter={hover} onMouseLeave={leave}>Projects</a>
      <a className="item" onClick={scroll} onMouseEnter={hover} onMouseLeave={leave}>Resume</a>
      <a className="item" onClick={scroll} onMouseEnter={hover} onMouseLeave={leave}>Contact</a>
  </div>;
}
