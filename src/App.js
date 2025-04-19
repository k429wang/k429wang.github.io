import React from 'react';
import './App.css';

import {Header, Navbar, About, Resume, Contact, Experience, Projects} from './containers'

export default function App() {
  return <div className='webpage'>
    <Header />
    <Navbar />
    <About />
    <Experience />
    {/* <Projects /> */}
    <Resume />
    <Contact />
  </div>;
}

{/*TODO
 - add media queries to every section
 - projects
  - add all projects
  - run all github projects, fix them, make them better, then add logos/pictures for them
  - change arrows to look better
  - change the projects icons to show the skills instead of URL
  - make projects clickable to URL
  - change the skills section to automatically populate with all of the skills of the projects, and sort by most common, and highlight ones with > 3 projects
 - about me
  - update picture
  - edit border
  - wording changes
 - navbar -> fix the weird cursor bug?
 - experience -> add space in front of @ sign 
*/}