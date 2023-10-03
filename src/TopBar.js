import React from 'react';
import Button from './Button';
//import Dropdown from './Dropdown'
import { Link } from 'react-router-dom';
import Tlogo from './Tlogo.png';
//import TRlogo from './TransRoboOwl.svg'

const TopBar = () => {
  const topBarStyle = {
    backgroundColor: '',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: 'white',
    // Add any additional styles you want for the top bar
  };
// look into how to customize links like buttons

  return <div style={topBarStyle}>
    <img src={Tlogo}
        alt="Templelogo" 
        style={{
            width: '50px',   // Set the width of the image
            height: '50px', // Set the height of the image
            margin: '0px',// Set the margin around the image

          }} 
        />

  <Link to = "/">
      <Button label="Home" />
    </Link>


    <Link to = "/Resumepage">
      <Button label ="resume"/>
    </Link>

    <Link to = "/Contact">
      <Button label = "conact me"/>
    </Link>

    <Link to ='/ProjectsPage'>
      <Button label ='Projects'/>
      </Link>
    
    </div>;
};

export default TopBar;
