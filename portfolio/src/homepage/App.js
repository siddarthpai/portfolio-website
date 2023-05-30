import './app.css';
import React from 'react';
import Intro from "./Intro"
import Brief from './brief';
import Navbar from "./navbar"

function App() {
  return (
    <div className="font-link">
      <div className="App" class="h-screen">
            <Navbar/>
            <Intro/>      
      </div>  
      <Brief/> 
    </div>  
  );
}

export default App;
