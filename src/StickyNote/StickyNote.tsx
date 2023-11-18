import { useEffect, useState } from 'react';
import { createSticky } from '../api_calls/create-sticky';
import { getStickies } from '../api_calls/get-stickies';
import { deleteSticky } from '../api_calls/delete-sticky';

type note = {
  title: string;
  content: string;
  id: number;
};
// type StickyProps = {
//   //noteArr: note[] | null;
//   //handleNotes: (noteInput: note) => void;
// };
const StickyNote = () => {
  const [note, setNote] = useState<note>({ title: '', content: '', id: 0 });

  useEffect(() => {
    fetchStickies();
  }, []);

  const fetchStickies = async () => {
    try {
      await getStickies().then((data) => {
        setNote(data);
        console.log(stickies);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const createS = async (value) => {
    try {
      await createSticky(value);
    } catch (e) {
      console.log(e);
    }
  };

  // const completeT = (id: any) => {
  //   try {
  //     completeSticky(id);
  //     const audio = new Audio(oneUp);
  //     audio.play();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const deleteS = (value: any) => {
    try {
      deleteSticky(value);
      const audio = new Audio(gameOver);
      audio.play();
    } catch (e) {
      console.log(e);
    }
  };
  const handleStickyAdd = async () => {
    // put functionality here
    await createS(note);
    // await fetchTasks();
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="note">Make A Super Duper Fun EX-TREME Note:</label>
        <input
          type="text"
          name="noteTitle"
          id="noteTitle"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
            setNote((e) => e.target.value);
          }}
        />
        <input type="text" name="noteContent" id="noteContent" />
        <input type="submit" value="Submit" />
      </form>
      <div className="notes">
        {/* {notes?.map((note) => {
          return (
            <>
              <h3>Title: {note.title}</h3>
              <p>{note.content}</p>
            </>
          );
        })} */}
      </div>
    </>
  );
};
export default StickyNote;
