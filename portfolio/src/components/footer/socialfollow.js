import '../homepage/app.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";



export default function Socials() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.youtube.com/c/jamesqquick" className='linkedin social'>
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
      </a>
      <a href="https://www.youtube.com/c/jamesqquick" className='github social'>
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </a>
    </div>
  );
}










