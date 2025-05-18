import React from 'react';
import './App.css';

import {Header, Navbar, About, Resume, Contact, Experience, Projects} from './containers'

export default function App() {
  return <div className='webpage'>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Projects />
    <Resume />
    <Contact />
  </div>;
}

/*TODO
 - improve mobile view and overall css responsiveness
 - projects
  - integrate with Github API?
  - add capstone + android app
  - add any remaining projects (not found on github)
  - run all github projects, fix them, make them better, then add logos/pictures for them
 - about me -> update picture + edit border
 - experience -> integrate with LinkedIn API?
 - navbar -> fix the weird cursor bug?
*/