import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Planets from './pages/Planets';
import About from './pages/About';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
            <Routes> 
                <Route exact path="/"  element={<Home />} />
                <Route exact path="/planets" element={<Planets/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route exact path="/jobs" element={<Jobs/>} />
            </Routes> 
        </Router>
    </div>
  );
}

export default App;
