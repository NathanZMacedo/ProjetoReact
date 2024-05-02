import React, { useContext } from 'react'
import './Note.css'
import { CiTrash } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { NoteContext } from '../../context/NoteContext';

function Note({title,description,date,id }) {
  const {deleteNote, setEditing, setNote, setIdEdit} = useContext(NoteContext)

  function SubmitToEdit() {
    setEditing(true);
    setNote({title, description});
    setIdEdit(id);
  }

  return (
    <div className='noteContainer'>
      <div className='title'> {title} </div>
      <div className="description"> {description} </div>
      <div className="edit" onClick={()=> SubmitToEdit}> <FaPen fontSize={17} color='white'/> </div>
      <div className="delete" onClick={() => deleteNote(id)}> <CiTrash fontSize={20} color='white' /> </div>
      <div className="date"> {date} </div>
    </div>
  )
}

export default Note;
