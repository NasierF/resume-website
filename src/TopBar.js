import React from 'react';
import Button from './Button';
import './TopBar.css'
import { motion } from 'framer-motion';


function scrollToTop() {
  console.log("onscroll pressed");
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function scrollToAbt() {
  const targetElement = document.getElementById('abt');
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

  console.log("onscroll pressed");
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}

function scrollToSk() {
  const targetElement = document.getElementById('sk');
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

  console.log("onscroll pressed");
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}


const TopBar = () => {
  const topBarStyle = {
    backgroundColor: '',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: 'white',
    // Add any additional styles you want for the top bar
  };
  
  
//since Topbar is not a part of the main file, it may not be possible to use the scrollto function from here, maybe implement the topbar in main file

  return <div style={topBarStyle} className='TopBar-container'>
    
    <h1>Nasier Fowlkes</h1>
   
    <motion.div className='buttonclass'  whileHover={{scale: [1,1.8]}} onClick={() => scrollToTop()}>
      <Button label="Home"/>
    </motion.div>
    <motion.div className='buttonclass' whileHover={{scale: [1,1.5]}} onClick={() => scrollToAbt()}>
      <Button label="About me"/>
    </motion.div >
    <motion.div className='buttonclass' whileHover={{scale: [1,1.5]}} onClick={() => scrollToSk()}>
    <Button label ='Skills'/>
    </motion.div>
  </div>;
};

export default TopBar;
