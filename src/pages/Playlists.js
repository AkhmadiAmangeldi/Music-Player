import React, { useState, useEffect } from 'react';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    setPlaylists([
      { id: 1, name: 'Top Hits' },
      { id: 2, name: 'Relax' },
    ]);
  }, []);

  return (
    <div>
      <h2>Плейлисты</h2>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
