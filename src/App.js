import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { useState } from 'react';
import './App.css';
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
import LaTeXRes from './nasier-fowlkes-resume.pdf'
// import Modal from './Modal'
// import space from './space-background.jpeg'

function App(){
  //  logic for sliding in
  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    const viewportWidth = document.documentElement.clientWidth;
    console.log("use effect hook, inView = ", inView);
    if(inView){
      const target = viewportWidth/2;
      animation.start({x: target, transition: {type: 'spring', duration: 1.5, bounce: 0.3, delay: 0.01}, opacity: 1});
    }
    if (!inView){
     ;
    }

  }, [inView, animation])

  // logic for modal
  // const [openModal, setOpenModal] = useState(false)

  return (
  <div className="App">
  <div className='TitleConainer'>
    <h1>Hi! </h1>
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
      {/* phone number doesnt worl on published app also resum download istoo far to the left, lessen the width of the anchor*/}
      <a href='tel:+16106627443' target='_blank' rel="noreferrer">
        <img src={phone} alt='phone#'/>
      </a>
      <div className='resume-download'>
        <a href={LaTeXRes} download="nasier-fowlkes-resume.pdf">
          <p>Download resume</p>
          <img src={dwn} alt='resume download'/>
        </a>
      </div>
    </h5>
  </div>
  <div id='test'></div>
  <h1 id='abtme'> A little about myself </h1>
  <div ref={ref} className='AboutMe'>
    <div id='abt'></div>
    {/* <h1> A little about myself: </h1> */}
      <motion.div className='bubbles' animate={animation} >
          <p>I am the current <span>Web Manager</span> of Temple Robotics</p>
      </motion.div>
    <motion.div className='bubbles' animate={animation}>
        <p>I participated in Temple Universitys <span>2023 Owlhacks</span> competition </p>
    </motion.div>
    <motion.div className='bubbles' animate={animation}>
        <p>My current occupation is <span>IT Support</span> at Temple University</p>
    </motion.div>
    <div id='sk'></div>
    <div className='skills'>
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
    <p></p>
  </div>
  
  
  
  
  {/* modal example here */}    
      {/* <img className='initial' src={space} alt='space' onClick={() => {setOpenModal(true)}}/>
      {openModal && <Modal closeModal = {setOpenModal}/>} */}

  
    
</div>);
}







export default App;