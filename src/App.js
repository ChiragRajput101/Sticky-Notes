import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";

function App() {
  const[notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "Dummy note text",
    date: "9/7/23"
    },
    {
      id: nanoid(),
      text: "Dummy note text2",
      date: "9/7/23"
    },
    {
      id: nanoid(),
      text: "Dummy note text3",
      date: "9/7/23"
    },
  ]);

  return (
    <div className='container'>
      Notes App
      <NotesList notes = {notes}/>
    </div>
  ); 
};

export default App;