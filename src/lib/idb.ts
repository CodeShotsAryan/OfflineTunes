import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface MyDB extends DBSchema {
  songs: {
    key: number;
    value: { id: number; name: string; file: string };
  };
}

let db: IDBPDatabase<MyDB> | null = null;

export const initDB = async () => {
  if (typeof window !== 'undefined') {
    db = await openDB<MyDB>('music-player', 1, {
      upgrade(db) {
        db.createObjectStore('songs', { keyPath: 'id', autoIncrement: true });
      },
    });
  }
};

export const addSong = async (song: { id: number; name: string; file: string }) => {
  if (db) {
    return db.add('songs', song);
  }
};

export const getSongs = async () => {
  if (db) {
    return db.getAll('songs');
  }
  return [];
};

export const deleteSong = async (id: number) => {
  if (db) {
    return db.delete('songs', id);
  }
};
