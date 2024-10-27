import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Residences from './components/Residences';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <header className="header" id="header">
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
        <Residences />
        <Contact />
      </main>
    </div>
  );
};

export default App;
