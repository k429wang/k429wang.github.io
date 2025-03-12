import React from 'react';
import './navbar.css';
import { scroller } from 'react-scroll';

export default function Navbar() {
  // On button click scroll to the designated element
  function click(e) {
    if (e.target.classList.contains('item')) {
      var content = e.target.textContent;
      var cap = content.charAt(0).toLowerCase() + content.slice(1);
      scroller.scrollTo(cap, {
        duration: 500,
        smooth: true,
      });
    }
  }

  return (
    <div className="navbar" onClick={click}>
      <a className="item">About</a>
      <a className="item">Experience</a>
      <a className="item">Projects</a>
      <a className="item">Resume</a>
      <a className="item">Contact</a>
    </div>
  );
}
