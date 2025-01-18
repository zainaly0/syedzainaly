import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" style={{ fontSize: "1.6rem", fontWeight: "2rem", paddingLeft: "1.4rem" }}>Syed Zain Aly</a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-home nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>about
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
