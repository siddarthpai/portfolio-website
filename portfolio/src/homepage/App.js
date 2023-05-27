import './app.css';
import React from 'react';
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import About from "/home/sid/portfolio-website/portfolio/src/about/App"
import S from "/home/sid/portfolio-website/portfolio/src/images/s.png"
function App() {
  return (

    <div className="font-family: 'Poppins', sans-serif;">
        

      <div className="App" class="h-screen">

            <div id="navbar" class="text-white">
              <img src={S}></img>
              <div id="navbar-names" class="fixed right-0 m-4 p-12">
                <a href="" class="m-4 text-4xl">Home</a>
                <a href="" class="m-4 text-4xl">About</a>
                <a href="" class="m-4 text-4xl">Blog</a>
                <a href="" class="m-4 text-4xl">Contact</a>
              </div>
            </div>

        
          
            <div class="scroll-down">
              <span>scroll down</span>
              <i class="fas fa-arrow-down"></i>
            </div>
      
            <div class="scroll-down scroll-down--left">
              <span>scroll down</span>
              <i class="fas fa-arrow-down"></i>
            </div>
          <section>
            <div id="intro" className="text-white m-5 text-9xl font-family: 'Poppins', sans-serif;">
                <Typewriter
            
                onInit={(typewriter)=> {
            
                typewriter
                .typeString("Hey!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I'm Siddarth Pai")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Web Developer")
                .deleteAll()
                .start();
                }}
                />
          </div>

          </section>
          
      </div>  
    </div>  
  );
}

export default App;
