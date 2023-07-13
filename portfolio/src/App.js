import React from 'react'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Blog from './components/contact/contact'
import Blog1 from './components/blog/Blog1(Introduction To Flutter)/Blog1'
import Blog2 from './components/blog/Blog2(IntrotoVimpt1)/Blog2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path="/about"
            component={<About />}
          />
          <Route
            path="/blog"
            component={<Blog />}
          />
          <Route
            path="/contact"
            component={<Contact />}
          />
          <Route
            path="/blog/blog1"
            Component={<Blog1 />}
          />
          <Route
            path="/blog/blog2"
            Component={<Blog2 />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
