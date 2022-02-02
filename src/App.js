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
 - replace resume section with gallery showing photos of travels. have resume as an download icon link in contact section instead
 - use parallax scrolling for header section (have content scroll at different speed than background and new content, about section)
*/}