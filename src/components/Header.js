import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ isAuthenticated, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleLoginClick = () => {
    navigate('/login'); // Перенаправляем на страницу входа
  };

  return (
    <div className="header">
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
