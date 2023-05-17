//import logo from './logo.svg';
import './App.css';
import backgroundImage from './ResBack.jpg';

function App(){
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    backgroundSize: 'cover', // Adjust the background size as needed
    //backgroundRepeat: 'bo-repeat',
    // Add any additional styles you want for the background
  };
          
  return (
    <div className="App" style = {appStyle}>
      <h1>Welcome to my website :)</h1>
      <p>the first thing to begin working on is getting a top bar with working buttons.</p>

    </div>
  );
  
}

export default App;
