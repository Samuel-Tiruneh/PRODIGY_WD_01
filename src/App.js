import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Residences from './components/Residences';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.getElementById('header');

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - header.offsetHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.hash === `#${current}`) {
          link.classList.add('active-link');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
