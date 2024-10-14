import React, { useState, useEffect, useMemo, useCallback } from 'react';

const Content = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPlaylists([
        { id: 1, name: 'Top Hits' },
        { id: 2, name: 'Relax' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredPlaylists = useMemo(() => {
    return playlists.filter(playlist => 
      playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [playlists, searchTerm]);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search playlists"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <h2>Playlists</h2>
      <ul>
        {filteredPlaylists.map(playlist => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
