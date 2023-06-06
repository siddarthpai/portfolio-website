
import React from 'react';
import Navbar from "./components/navbar/navbar"
import About from './components/about/about';
import Contact from './components/contact/contact';
import Blog from "./components/contact/contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path='/about' component={<About/>} />
          <Route path='/blog' component={<Blog/>} />
          <Route path='/contact' component={<Contact/>} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
