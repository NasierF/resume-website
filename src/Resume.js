import React from 'react';
//Resume.css iis currently not function, this is where to pick back up
import './Resume.css';
import Resumeimg from './NF_Resume.png';


const Resume = () => {
    return( 
    <div classname="resume-container">
        <h1> This is the page implemented for diplaying resume and achievments </h1>
        <p>here is where resume will be displayed</p>
        <img src={Resumeimg} 
        alt="Resume" 
        style={{
            width: '600px',   // Set the width of the image
            height: '500px', // Set the height of the image
            margin: '100px',// Set the margin around the image

          }} 
        />
    </div>
    );
}

export default Resume;