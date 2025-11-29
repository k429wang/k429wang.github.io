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
  - add new projects (tower defense, genius ventures project, javascript messaging app, etc.)
  - integrate with Github API?
  - remove "skills" title
  - redo project cards -> remove icons, make all consistent size (consider switching to 1 row, 4 columns?)
  - run all github projects, fix them, make them better, then add logos/pictures for them
 - experience -> integrate with LinkedIn API?
 - navbar -> fix the weird cursor bug?
 - resume -> remove resume section, and add extra link to contact section
 - contact -> add extra link to resume section
*/