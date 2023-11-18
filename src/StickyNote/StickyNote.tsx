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
      fetchStickies()
      // const audio = new Audio(gameOver);
      // audio.play();
    } catch (e) {
      console.log(e);
    }
  };

  const handleStickyAdd = async () => {
    try {
      await createS(title, note);
      await fetchStickies();
      setTitle('');
      setNote('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <div className={styles.stickyBody}>
        <button className={`${styles.homeButton} ${styles.btn}`} onClick={() => navigate('/')}>
          Home
        </button>
        <div className={styles.container}>

          <form className={styles.formContainer}>
            <label htmlFor="note">Make An EX-TREME Note:</label>
            <br/>
            <input
                value={title}
                placeholder="Title"
                type="text"
                name="noteTitle"
                id="noteTitle"
                onChange={(e: any) => setTitle(e.target.value)}
            />
            <br/>
            <br/>
            <input
                className={styles.noteInput}
                value={note}
                placeholder="Note"
                type="text"
                name="noteContent"
                id="noteContent"
                onChange={(e: any) => setNote(e.target.value)}
            />
            <br/>
            <br/>
            <button className={styles.btn} type="button" value="Submit" onClick={() => handleStickyAdd()}>
              Add Note
            </button>
          </form>
          {stickies.map((note: any) => (
              <div className={styles.sticky}>
                <h3>Title:{note.title}</h3>
                <p>{note.note}</p>
                <button className={styles.btn} type="button" onClick={() => deleteS(note.id)}>
                  X
                </button>
              </div>
          ))}


        </div>
      </div>

  );
};
export default StickyNote;
