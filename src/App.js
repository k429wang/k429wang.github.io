import React from 'react';
import './App.css';

import {Header, Navbar, About, Projects, Resume, Contact} from './containers'

export default function App() {
  return <div className='webpage'>
    <Header />
    <Navbar />
    <About />
    <Projects />
    <Resume />
    <Contact />
  </div>;
}
