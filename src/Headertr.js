// Header.js

import React from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">     
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link to="/tr" className="logo d-flex align-items-center me-auto me-lg-0">
          <img src="assets/img/starkLoogo.svg" alt="" />
          <h1 className="myfont">system.conf</h1>
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <Link to="/tr">Anasayfa</Link>
            <Link to="/tr/hakkimda">Hakkımda</Link>      
            <Link to="/tr/portföy">Portföy</Link>
            <Link to="/tr/hizmetler">Hizmetler</Link>
            <Link to="/tr/iletisim">İletişim</Link>
          </ul>
        </nav>

        <div className="header-social-links">
          <a href="https://www.linkedin.com/in/system-conf/" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/system-conf" target="_blank" rel="noopener noreferrer" className="github"><i className="bi bi-github"></i></a>
          <a href="https://twitter.com/system_conf" target="_blank" rel="noopener noreferrer" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="https://www.instagram.com/system.conf/" target="_blank" rel="noopener noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
          <div className="line">|</div>
          <Link to="/" className="linkedin myletter mybold">En</Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
