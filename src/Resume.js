import React from 'react';
//Resume.css is currently not function, this is where to pick back up
import './Testpage.css';
//import Resumeimg from './NF_Resume.png';
import ResumePDF from './LaTeX_resume.pdf';


const Resume = () => {
    return( 
    <div classname="Resumep">
        <h1> This is the page implemented for diplaying resume and achievments </h1>
        <p>here is where resume will be displayed </p>
        
        <embed
        src={ResumePDF} // Use the imported PDF file as the source
        type="application/pdf"
        width="100%" // Set the width to fill the container
        height="500px" // Set the height as needed
      />
    </div>
    );
}

export default Resume;