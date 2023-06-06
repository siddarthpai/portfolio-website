import './app.css';
import React from 'react';
import Intro from "./Intro"
import Brief from './brief';
import Navbar from "../navbar/navbar"
import Socials from '../footer/socialfollow';


function Index() {
  return (
    <div className="font-link">
      <div className="App" class="h-screen">
            <Intro/>      
      </div>  
      <Brief/> 
      <Socials/>
  </div>  
  );
}

export default Index;
