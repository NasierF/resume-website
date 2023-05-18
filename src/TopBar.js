import React from 'react';

const TopBar = () => {
  const topBarStyle = {
    backgroundColor: 'black',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    // Add any additional styles you want for the top bar
  };

  return <div style={topBarStyle}> 
  <button>button 1</button>   <button>button 2</button>       <button> button 3</button>
  
  </div>;
};

export default TopBar;
