import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Testing from './Resumepage';
import Contact from './Contact';
import Projects from './projectsPage';
import slide1 from './TransRoboOwl.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
//add a projects page. -- add button to TopBAr for navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Resumepage" element={<Testing />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/ProjectsPage" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

  const HomePage = () => {
    return(
    <div className="App">
      <div className='TitleConainer'>
        <h1>Hi!</h1>
        <h2>I am <span>Nasier Fowlkes</span></h2>
        <h3><span>Computer Science</span> senior at <span>Temple University</span></h3>
        <h5> 
          <a href="https://github.com/NasierF" target="_blank" rel="noreferrer">
          <img src={github} alt='Github'/>
          </a>
          <a href='https://www.linkedin.com/in/nasier-fowlkes-09115b238/' target='_blank' rel="noreferrer">
            <img src={linkedin} alt='Linkedin'/>
          </a>
        </h5>
      </div>
      <div className='AboutMe'>
       <h1> A little about myself: </h1>
        <h4>
          <p>I am the current <span>Web Manager</span> of Temple Robotics</p>
          <img src={slide1} alt=''/>
        </h4>
      </div>
        
      
    </div>
    );
  }


export default App;