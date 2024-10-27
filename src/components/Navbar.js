import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [scrollHeader, setScrollHeader] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }

      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 70 && window.scrollY < sectionTop + sectionHeight - 70) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme');
  };

  return (
    <nav className={`nav container ${scrollHeader ? 'scroll-header' : ''}`}>
      <a href="#" className="nav__logo">Bete. <i className='bx bxs-home-smile'></i></a>
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              to="home"
              className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <i className='bx bxs-home-alt-2'></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="about"
              className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <i className='bx bx-info-circle'></i>
              <span>About</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="residences"
              className={`nav__link ${activeSection === 'residences' ? 'active-link' : ''}`}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <i className='bx bx-building-house'></i>
              <span>Residences</span>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="contact"
              className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <i className='bx bxs-phone'></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={toggleTheme} className="change-theme">
        {theme === 'light' ? <i className='bx bx-moon'></i> : <i className='bx bx-sun'></i>}
      </button>
    </nav>
  );
};

export default Navbar;
