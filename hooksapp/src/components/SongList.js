import React, { useState, useEffect } from "react";
import uudi from "uuid/v1";

// components
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song 1" },
    { id: 2, title: "Song 2" },
    { id: 3, title: "Song 3" }
  ]);

  const [age, setAge] = useState(44);

  useEffect(() => {
    console.log("effects on songs", songs);
  }, [songs]);

  useEffect(() => {
    console.log("effects on age", age);
  }, [age]);

  const addSong = title => setSongs([...songs, { id: uudi(), title }]);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
