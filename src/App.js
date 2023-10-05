import React /* , { useEffect } */ from 'react';
//import { motion, useAnimation } from 'framer-motion';
import './App.css';
import TopBar from './TopBar';
import Testing from './Resumepage';
import Contact from './Contact';
import Projects from './projectsPage';
//import slide1 from './TRO_fixed.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
import mail from './envelope-solid.svg'
import phone from './phone-solid.svg'
import R from './react-2.svg'
import java from './java-4.svg'
import js from './javascript-1.svg'
import sqlite from './sqlite.svg'
import C from './c-1.svg'
import ROS from './Ros_logo.svg.png'
import python from './python-5.svg'
import HTML from './html-1.svg'
import Css from './css-3.svg'
import dwn from './download-solid.svg'
import LaTeXRes from './LaTeX_resume.pdf'
//import QW from './QuizWizLogo.png'
//add a projects page. -- add button to TopBAr for navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Button from './Button';

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
      /* framer motion logic goes here, actual visual elements are retuned */
    






    return(
    <div className="App">
      <div className='TitleConainer'>
        <h1>Hi!</h1>
        <h2>I am <span>Nasier Fowlkes</span>,</h2>
        <h3><span>Computer Science</span> senior at <span>Temple University</span>.</h3>
        <h5>
          <a href="https://github.com/NasierF" target="_blank" rel="noreferrer">
          <img src={github} alt='Github'/>
          </a>
          <a href='https://www.linkedin.com/in/nasier-fowlkes-09115b238/' target='_blank' rel="noreferrer">
            <img src={linkedin} alt='Linkedin'/>
          </a>
          <a href='mailto:nasierfowlkes@yahoo.com' target='_blank' rel="noreferrer">
            <img src={mail} alt='email'/>
          </a>
          <a href='tel:+6106627443' target='_blank' rel="noreferrer">
            <img src={phone} alt='phone#'/>
          </a>
          <div className='resume-download'>
            <a href={LaTeXRes} download="nasier-fowlkes-resume.pdf">
              <p>download resume</p>
              <img src={dwn} alt='resume download'/>
            </a>
          </div>
        </h5>
      </div>
      <div className='AboutMe'>
        <h1> A little about myself: </h1>
        <div className='bubbles'>
            <p>I am the current <span>Web Manager</span> of Temple Robotics</p>
        </div>
        <div className='bubbles'>
            <p>I participated in Temple Universitys <span>2023 Owlhacks</span> competition </p>
        </div>
        <div className='bubbles'>
            <p>My current occupation is <span>IT Support</span> at Temple University</p>
        </div>
        <h1>My <span>Skills</span></h1>
        <div className='line'><p></p></div>
        <div className='image-container'>
          <img src={R} alt='React'/>
          <img src={java} alt='Java'/>
          <img src={js} alt='JavaScript'/>
          <img src={sqlite} alt='SQLite'/>
          <img src={C} alt='C'/>
          <img src={ROS} alt='ROS'/>
          <img src={python} alt='Python'/>
          <img src={HTML} alt='Python'/>
          <img src={Css} alt='Css'/>
        </div>
      </div>
    </div>
    );
}


export default App;