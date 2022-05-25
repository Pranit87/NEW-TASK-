import { useState } from "react";


const AddNote = ({handleAddNote}) => {
    const[noteText, setNotetext]  = useState("");
    const characterlimit = 50;

    const handleChange = (event) => {
        if(characterlimit - event.target.value.length >= 0 )
        setNotetext(event.target.value);
    };

    const handleSaveClick = () => {
            handleAddNote(noteText);

        

    };

    return (
        <div className = "note new">
            <textarea 
                row = '8'
                cols = '10' 
                placeholder = 'Add something to add new note......'
                onChange = {handleChange}
                value = {noteText}
             ></textarea>
             <div className = "note-footer">
                 <small>{characterlimit - noteText.length} remaining </small>
                 <button className = "save" onClick={handleSaveClick}>SAVE</button>
             </div>
        </div>
    );
}
 
export default AddNote;