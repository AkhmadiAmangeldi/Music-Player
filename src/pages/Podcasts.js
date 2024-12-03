import React, { useState, useEffect } from 'react';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    setPodcasts([
      { id: 1, name: 'Tech Talk' },
      { id: 2, name: 'Daily News' },
    ]);
  }, []);

  return (
    <div>
      <h2>Подкасты</h2>
      <ul>
        {podcasts.map(podcast => (
          <li key={podcast.id}>{podcast.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Podcasts;
