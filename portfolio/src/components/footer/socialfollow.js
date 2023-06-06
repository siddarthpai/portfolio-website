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
      <a href="https://www.instagram.com/siddarth_pai/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/siddarth-pai-ba993a219/" className='linkedin social'>
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
      </a>
      <a href="https://github.com/siddarthpai" className='github social'>
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </a>
    </div>
  );
}










