import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const locaiton = useLocation();
  const name = locaiton.pathname === '/mullah' ? 'Mullah Zain Mujahid' : 'Syed Zaid Aly';

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/mullah"  style={{
            fontSize: "1.6rem",
            fontWeight: "2rem",
            paddingLeft: "1.4rem",
          }}>
         {name}
        </Link> 

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link"> 
                  <i className="uil uil-home nav__icon"></i>Home
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </Link>
            </li> 
            <li className="nav__item">
              <a href="mailto:zaidk4076@gmail.com" className="nav__link">
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
