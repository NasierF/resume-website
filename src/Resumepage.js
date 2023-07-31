import React from 'react';
import './Resumepage.css';
import Resumeimg from './NF_Resume.png';

const Testing = () => {
    return(
    <div className='Testpage'>
        <h1> This page is for resume and achievments, etc.</h1>

        <img src={Resumeimg} 
        alt="Resume" 
        style={{
            width: '600px',   // Set the width of the image
            height: '630px', // Set the height of the image
            margin: '50px',// Set the margin around the image

          }} 
        />
    </div>
    );
}

export default Testing;