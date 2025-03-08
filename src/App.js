import React from 'react';
import './App.css';

import {Header, Navbar, About, Resume, Contact} from './containers'
import {AnimatedBackground} from './animations/AnimatedBackground'

export default function App() {
  var darkMode = true;

  return <div className='webpage'>
    <Header />
    <Navbar />
    <About />
    <Resume />
    <Contact />
  </div>;
}

{/*TODO
 - replace vh/vw variables with rem and use media queries instead
 - implement projects section
 - add personal touch to about me section
 - make parallax scrolling more prominent and fix overlapping divs issue
*/}