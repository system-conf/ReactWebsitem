// MobileMenu.js
import React, { useState } from 'react';
import './MobileMenu.css'; // CSS dosyanızın gerçek yolunu kullanın

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {isMenuOpen && (
        <div className="menu-items">
          {/* Menü öğelerini buraya ekleyin */}
          <a href="/">Ana Sayfa</a>
          <a href="/about">Hakkında</a>
          <a href="/portfolio">Portföy</a>
          <a href="/contact">İletişim</a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
