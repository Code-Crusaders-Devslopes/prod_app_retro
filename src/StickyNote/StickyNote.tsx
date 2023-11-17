import { useState } from "react";

type note = {
  title: string;
  content: string;
  id: number;
};
type StickyProps = {
  //noteArr: note[] | null;
  //handleNotes: (noteInput: note) => void;
};
const StickyNote = ({}: StickyProps) => {
  const [notes, setNotes] = useState<note[] | null>();
  return (
    <>
      <form>
        <label htmlFor="note">Make A Super Duper Fun EX-TREME Note:</label>
        <input type="text" name="noteTitle" id="noteTitle" />
        <input type="text" name="noteContent" id="noteContent" />
        <input
          type="submit"
          onChange={(e) => {
            console.log(e);
          }}
        >
          Submit
        </input>
      </form>
      <div className="notes">
        {notes?.map((note) => {
          return (
            <>
              <h3>Title: {note.title}</h3>
              <p>{note.content}</p>
            </>
          );
        })}
      </div>
    </>
  );
};
export default StickyNote;
