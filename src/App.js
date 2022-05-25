import { useState } from "react";
import {nanoid} from 'nanoid';
import Noteslist from "./Components/NotesList";
import Search from "./Components/Search";

const App = () => {
    const [notes,setNotes] = useState([
      {
      id : nanoid(),
      text: "This is my first note",
      date: "13/08/2020",

    },
    {
      id : nanoid(),
      text: "This is my second note",
      date: "14/08/2020",

    },
    {
      id : nanoid(),
      text: "This is my third note",
      date: "15/08/2020",

    },
    {
      id : nanoid(),
      text: "This is my fourth note",
      date: "16/08/2020",

    },
  ]);

  const [searchText, setsearchText] = useState("")



  const addNote  = (text) => {
    const date = new Date();

    const newNote = {
      id : nanoid(),
      text : text,
      date: date.toLocaleDateString()

    };

    const newNotes = [...notes,newNote];
    setNotes(newNotes);

  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id );
    setNotes(newNotes);

  }



  return(
    <div className = 'container'>
      <Search handleSearchNote = {setsearchText}/>

      <Noteslist notes = {notes.filter((note) =>
        note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote} 
      handleDeleteNote = {deleteNote}
      />
    </div>
  );
}

export default App;
