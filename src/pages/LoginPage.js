import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Пример простой авторизации
    if (username === 'admin' && password === '123') {
      onLogin(); // Устанавливаем состояние авторизованного пользователя
      navigate('/'); // Перенаправляем пользователя на главную страницу после успешного входа
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div style={loginPageStyle}>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя пользователя</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

const loginPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#121212',
  color: '#fff',
};

export default LoginPage;
