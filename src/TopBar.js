import React from 'react';
import Button from './Button';
import './TopBar.css'


function scrollToTop() {
  console.log("onscroll pressed");
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function scrollToAbt() {
  console.log("onscroll pressed");
  window.scrollTo({
    top: 960,
    behavior: 'smooth',
  });
}

function scrollToSk() {
  console.log("onscroll pressed");
  window.scrollTo({
    top: 2000,
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
    <div onClick={() => scrollToTop()}>
      <Button label="Home"/>
    </div>
    <div onClick={() => scrollToAbt()}>
      <Button label="about me"/>
    </div >
    <div onClick={() => scrollToSk()}>
    <Button label ='skills'/>
    </div>
  </div>;
};

export default TopBar;
