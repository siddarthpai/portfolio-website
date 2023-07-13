import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { FaNode } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'

export default function Skills() {
  return (
    <div className="text-white ">
      <h1 className="text-3xl flex justify-center items-center ">What I do!</h1>
      <p className="text-sm text-center">
        Highly ambitious Full Stack Developer eager to delve into a wide array of technology
        horizons.
      </p>
      <div class=" grid grid-cols-4 gap-4 lg:ml-64 mt-16 mb-16">
        <div>
          <FaHtml5 className="fa-4x" />
          <p>HTML</p>
        </div>
        <div>
          <FaCss3 className="fa-4x" />
          <p>CSS</p>
        </div>
        <div>
          <FaGit className="fa-4x" />
          <p>Git</p>
        </div>
        <div>
          <FaNode className="fa-4x" />
          <p>Node</p>
        </div>
        <div>
          <FaNpm className="fa-4x" />
          <p>NPM</p>
        </div>
        <div>
          <FaPython className="fa-4x" />
          <p>Python</p>
        </div>
        <div>
          <FaJs className="fa-4x" />
          <p>JS</p>
        </div>
        <div>
          <FaReact className="fa-4x" />
          <p>React</p>
        </div>
        <div>
          <FaVuejs className="fa-4x" />
          <p>Vue</p>
        </div>
        <div>
          <FaDatabase className="fa-4x" />
          <p>Databases</p>
        </div>
      </div>
    </div>
  )
}
