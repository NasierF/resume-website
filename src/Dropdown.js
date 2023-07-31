import React, { useState } from 'react';
import './Dropdown.css';
//import Tlogo from './Tlogo.png'
import Rlogo from './Rlogo.jpg';
//spend some time understanding how to efficiently have options carry out functions

const Dropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to keep track of the dropdown status
  
    const handleDropdownClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionClick = (option) => {
      console.log(`You selected: ${option}`);
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={handleDropdownClick}>
          <img
            className="dropdown-icon"
            src={Rlogo}
            alt="Dropdown Icon"
          />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-options">
            <div className="option" onClick={() => handleOptionClick('Option 1')}>
              Twitter
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 2')}>
              Instagram
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 3')}>
              Teams
            </div>
          </div>
        )}
      </div>
    );
  };

export default Dropdown;
