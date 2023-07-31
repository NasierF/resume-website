import React from 'react';

//props is used to assign things, much like we do in a struct
const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.backgroundColor || 'transparent',
    color: props.textColor || 'white',
    padding: props.padding || '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    // Add any additional styles you want for the button
  };
  
  const buttonHoverStyle = {
    color: props.HoverTextColor || 'lightblue',
    // Add any additional styles you want for the button when hovered
  };

  return (
    <button style={{ ...buttonStyle }} onMouseEnter={(e) => { e.target.style.backgroundColor = buttonHoverStyle.backgroundColor; }} onMouseLeave={(e) => { e.target.style.backgroundColor = buttonStyle.backgroundColor; }}>
      {props.label}
    </button>
  );
};

export default Button;
