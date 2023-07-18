import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Resume from './Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App(){
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

  const HomePage = () => {
    return(
    <div className="App">
      <h1>Welcome to my website :)</h1>
      <p>the first thing to begin working on is getting a top bar with working buttons.</p>
      
      
    </div>
    );
  }


export default App;
