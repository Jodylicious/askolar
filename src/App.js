import React from 'react'
import './App.css';
import { Home, Info, School, Web } from '@mui/icons-material';
import { Link, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ChatApp from './components/ChatApp';
import About from './components/About';
import Website from './components/Website';
import Courses from './components/Courses';

function App() {
  return (
    <>
      <div className='navHeader'>
        <nav className='navBar'>
          <ul className="navlist">
            <li className="navitems">
              <Link to="/"><Home /></Link>
            </li>
            <li className="navitems">
              <Link to="/website"><Web /></Link>
            </li>
            <li className="navitems">
              <Link to="/courses"><School /></Link>
            </li>
            <li className="navitems">
              <Link to="/about"><Info /></Link>
            </li>

          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/website" element={<Website />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/chatapp" element={<ChatApp />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
