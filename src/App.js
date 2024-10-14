import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'; 
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Playlists from './pages/Playlists';
import Podcasts from './pages/Podcasts';
import LoginPage from './pages/LoginPage';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  const [showModal, setShowModal] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    if (redirectPath) {
      navigate(redirectPath);
      setRedirectPath(null);
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    navigate('/'); // Перенаправляем на главную страницу после выхода
  };

  const handleProtectedPageAttempt = (path) => {
    setRedirectPath(path);
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/login');
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <div className="app-body">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route
              path="/playlists"
              element={
                isAuthenticated 
                  ? <Playlists /> 
                  : <Navigate to="/login" /> 
              }
            />
            <Route
              path="/podcasts"
              element={
                isAuthenticated 
                  ? <Podcasts /> 
                  : <Navigate to="/login" /> 
              }
            />

            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />}
            />
          </Routes>
        </div>
      </div>

      {showModal && (
        <Modal onConfirm={handleModalConfirm} onCancel={handleModalCancel} />
      )}
    </div>
  );
};

export default App;
