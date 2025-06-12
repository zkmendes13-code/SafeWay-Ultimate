import React from 'react';
import './Header.css';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <button className="menu-toggle" onClick={onMenuToggle}>
          <i className="fas fa-bars"></i>
        </button>
        
        <div className="header-center">
          <img
            src="https://i.ibb.co/yFcpD1Gq/549b682d16cc.png"
            alt="Logo"
            className="logo"
          />
          <h1 className="app-title">TÚNEL INFINITO</h1>
        </div>
        
        <div className="header-spacer"></div>
      </div>
    </header>
  );
};

export default Header;
