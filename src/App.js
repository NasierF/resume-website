import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Testing from './Resumepage';
import Contact from './Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App(){
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Resumepage" element={<Testing />} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

  const HomePage = () => {
    return(
    <div className="App">
      <h1>Nasier G. Fowlkes</h1>
      <h2>current senior at Temple University</h2>
      <h2>A little about myself:</h2>
      
      
    </div>
    );
  }


export default App;
