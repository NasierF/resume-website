import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const topBarStyle = {
    backgroundColor: 'black',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: 'white',
    // Add any additional styles you want for the top bar
  };
// look into how to customize links like buttons

  return <div style={topBarStyle}>
  <Link to = "/">
      <Button label="Home"/>
    </Link>

    <Link to = "/Resume"> 
      <Button label="resume" />
    </Link>

    </div>;
};

export default TopBar;
