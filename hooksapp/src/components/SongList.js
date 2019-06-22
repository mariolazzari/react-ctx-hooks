import React, { useState } from "react";
import uudi from "uuid/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song 1" },
    { id: 2, title: "Song 2" },
    { id: 3, title: "Song 3" }
  ]);

  const addSong = () => setSongs([...songs, { id: uudi(), title: "Song 4" }]);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add song</button>
    </div>
  );
};

export default SongList;
