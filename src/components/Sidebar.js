import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Моя медиатека</h3>
      <Link to="/playlists">
        <button>Плейлисты</button>
      </Link>
      <Link to="/podcasts">
        <button>Подкасты</button>
      </Link>
    </div>
  );
};

export default Sidebar;
