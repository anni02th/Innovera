import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/element/About.jsx';
import Organiser from "./components/element/Organiser.jsx"
import Timeline from './components/element/Timeline.jsx';
import Rules from './components/element/Rules.jsx';
import IntroAnimation from './components/element/IntroAnimation.jsx';

function App() {
  return (
    <Router>
      
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<IntroAnimation />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/about" element={<About/>} />
        <Route path="/organiser" element={<Organiser />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
