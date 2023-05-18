import React from 'react';
import Button from './Button';

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

  return <div style={topBarStyle}> 
  <Button label="resume" />
  
  </div>;
};

export default TopBar;
