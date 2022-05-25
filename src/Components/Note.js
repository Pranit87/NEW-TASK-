import {MdAutoDelete} from 'react-icons/md'



const Note = ({id,text,date, handleDeleteNote}) => {
    return (
        <div className = 'note'>
        <span>{text}</span>
        <div className = "note-footer">
            <small>{date}</small>
            <MdAutoDelete onClick={() => handleDeleteNote(id)} />
        </div>


        </div>
    );
}
 
export default Note;