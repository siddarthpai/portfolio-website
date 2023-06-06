import './app.css';
import React from 'react';
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (

    <div className='text-yellow-100'>
        <div class="scroll-down">
              <span>scroll down</span>
              <i class="fas fa-arrow-down"></i>
            </div>
      
            <div class="scroll-down scroll-down--left">
              <span>scroll down</span>
              <i class="fas fa-arrow-down"></i>
            </div>
          <section>
            
            <div id="intro" className=" ml-14 mr-14 mt-10 lg:ml-28 mr-28 text-4xl p-5">
              <p className='text-base font-light'>&lt; h1 &gt;</p>
              <h1 className='text-5xl md:text-8xl lg:text-8xl'>Hi,</h1>
              <h1 className='text-4xl md:text-8xl lg:text-8xl'>I'm Sid,</h1>
              <div className='text-2xl md:text-2xl lg:text-4xl'>
                <Typewriter 
            
                onInit={(typewriter)=> {
            
                typewriter
                .typeString("I'm a Web Developer")
                .deleteAll()
                .typeString("App Developer")
                .deleteAll()
                .typeString("and a photography enthusiast")
                .deleteAll()
                .typeString("Welcome to my site!")
                .start();
                }}
                />
              </div>
                <p className='text-base font-light' >&lt; /h1 &gt;</p>


          </div>
          <div className='mt-20 lg:mt-0'>
          <a href="./contactme.html" class="contact-button ml-14 lg:ml-28">
                <div onclick="redir()">
                  <span class="bg"></span>
                  <span class="base"></span>
                  <span class="text ">
                    Contact me!
                  </span>
                </div>
          </a>
          </div>
          
          

          </section>
    </div> 
  );
}










