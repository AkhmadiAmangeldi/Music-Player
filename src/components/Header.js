import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; 

const Header = ({ isAuthenticated, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, [searchTerm]);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header-left" onClick={handleLogoClick}>
        <img 
          src={require('../images/Logos.png')} 
          alt="unTaspa Logo" 
          className="header-logo" 
        />
        <span className="header-title">unTaspa</span> {}
      </div>
      <input
        type="text"
        placeholder="Что хочешь включить?"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {isAuthenticated ? (
        <button onClick={onLogout}>Выйти</button>
      ) : (
        <button onClick={handleLoginClick}>Войти</button>
      )}
    </div>
  );
};

export default Header;
