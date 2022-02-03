import React from 'react';
import './App.css';

import {Header, Navbar, About, Projects, Resume, Contact} from './containers'

export default function App() {
  return <div className='webpage'>
    <Header />
    <Navbar />
    <About />
    {/* <Projects /> */}
    <Resume />
    <Contact />
  </div>;
}

{/*TODO
 - replace vh/vw variables with rem and use media queries instead
 - implement projects section
 - use parallax scrolling for header section (have content scroll at different speed than background and new content, about section)
*/}