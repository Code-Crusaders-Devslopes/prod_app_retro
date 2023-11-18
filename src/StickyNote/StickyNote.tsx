/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from './stickyNote.module.css';
import { useEffect, useState } from 'react';
import { createSticky } from '../api_calls/create-sticky';
import { getStickies } from '../api_calls/get-stickies';
import { deleteSticky } from '../api_calls/delete-sticky';
import { useNavigate } from 'react-router-dom';

const StickyNote = () => {
  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [stickies, setStickies] = useState<any>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchStickies();
  }, []);

  const fetchStickies = async () => {
    try {
      const data = await getStickies();
      // console.log(data);

      setStickies(data);
      console.log(stickies);
    } catch (e) {
      console.log(e);
    }
  };

  const createS = async (title: string, note: string) => {
    try {
      await createSticky(title, note);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteS = (value: any) => {
    try {
      deleteSticky(value);
      // const audio = new Audio(gameOver);
      // audio.play();
    } catch (e) {
      console.log(e);
    }
  };

  const handleStickyAdd = async () => {
    try {
      await createS(title, note);
      fetchStickies();
      setTitle('');
      setNote('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.homeButton} onClick={() => navigate('/')}>
        Home
      </button>
      <form>
        <label htmlFor="note">Make A Super Duper Fun EX-TREME Note:</label>
        <br />
        <input
          value={title}
          placeholder="Title"
          type="text"
          name="noteTitle"
          id="noteTitle"
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <input
          className={styles.noteInput}
          value={note}
          placeholder="Note"
          type="text"
          name="noteContent"
          id="noteContent"
          onChange={(e: any) => setNote(e.target.value)}
        />
        <br />
        <br />
        <button type="button" value="Submit" onClick={() => handleStickyAdd()}>
          Add Note
        </button>
      </form>
      {stickies.map((note: any) => (
        <>
          <h3>Title:{note.title}</h3>
          <p>{note.note}</p>
          <button type="button" onClick={() => deleteS(note.id)}>
            X
          </button>
        </>
      ))}
    </div>
  );
};
export default StickyNote;
