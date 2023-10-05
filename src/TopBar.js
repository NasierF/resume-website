import React from 'react';
import Button from './Button';
//import Dropdown from './Dropdown'
import './TopBar.css'
import { Link } from 'react-router-dom';
//import Tlogo from './Tlogo.png';
//import bars from './bars-solid.svg';
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

  
// look into how to customize links like buttons

  return <div style={topBarStyle}>
    <div className='TopBar-container'>
      <h1>Nasier Fowlkes</h1>

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
    </div>
  </div>;
};

export default TopBar;
