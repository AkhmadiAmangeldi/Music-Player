import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'; 
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Playlists from './pages/Playlists';
import Podcasts from './pages/Podcasts';
import LoginPage from './pages/LoginPage';
import withAuthProtection from './hoc/withAuthProtection'; 
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/'); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    navigate('/'); 
  };
  
  const ProtectedPlaylists = withAuthProtection(Playlists);
  const ProtectedPodcasts = withAuthProtection(Podcasts);

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
              element={<ProtectedPlaylists isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/podcasts"
              element={<ProtectedPodcasts isAuthenticated={isAuthenticated} />}
            />

      
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />}
            />
          </Routes>
        </div>
      </div>

    </div>
  );
};

export default App;