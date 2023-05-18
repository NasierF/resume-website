import React from 'react';

//props is used to assign things, much like we do in a struct
const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.backgroundColor || 'blue',
    color: props.textColor || 'white',
    padding: props.padding || '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    // Add any additional styles you want for the button
  };

  return <button style={buttonStyle}>{props.label}</button>;
};

export default Button;
