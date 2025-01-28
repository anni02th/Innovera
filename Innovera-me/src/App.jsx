import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Themes from "./components/Themes.jsx";
import Organiser from "./components/Organiser.jsx"
import Rules from "./components/Rules.jsx";
import Timeline from './components/Timeline.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/organiser" element={<Organiser />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
