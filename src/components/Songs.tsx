"use client"
import { useState, useEffect, ChangeEvent } from 'react';
import { addSong, getSongs, deleteSong, initDB } from '../lib/idb';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface Song {
  id: number;
  name: string;
  file: string;
}

export default function Songs() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    const fetchSongs = async () => {
      await initDB();
      const storedSongs = await getSongs();
      setSongs(storedSongs);
    };
    fetchSongs();
  }, []);

  const handleAddSong = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const songData: Song = {
        id: Date.now(),
        name: file.name,
        file: URL.createObjectURL(file),
      };
      await addSong(songData);
      const storedSongs = await getSongs();
      setSongs(storedSongs);
    }
  };

  const handleDeleteSong = async (id: number) => {
    await deleteSong(id);
    const storedSongs = await getSongs();
    setSongs(storedSongs);
  };

  return (
    <div>
      <h1>Offline Music Player</h1>
      <input type="file" accept="audio/*" onChange={handleAddSong} />
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.name}
            <button onClick={() => setCurrentSong(song)}>Play</button>
            <button onClick={() => handleDeleteSong(song.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {currentSong && (
        <AudioPlayer
          src={currentSong.file}
          onPlay={(e) => console.log("onPlay")}
        />
      )}
    </div>
  );
}
