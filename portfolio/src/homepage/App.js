import './app.css';
import React from 'react';
import Intro from "./Intro"
import Brief from './brief';
import Navbar from "./navbar"
import Socials from './socialfollow';

function App() {
  return (
    <div className="font-link">
      <div className="App" class="h-screen">
            <Navbar/>
            <Intro/>      
      </div>  
      <Brief/> 
      <Socials/>
    </div>  
  );
}

export default App;
