import React, { useEffect } from 'react'
import FormNote from '../../components/FormNote/FormNote.jsx'
import AllNotes from '../../components/AllNotes/AllNotes.jsx'
import { NoteProvider } from '../../context/NoteContext.jsx'
import './NotesPage.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function NotesPage() {
  const isLogged = useSelector((state)=> state.user.isLogged);
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged == false) {
      navigate ("/login");
    }
  }, []);

  return (
    <NoteProvider>
        <div className='notePageContainer'>
            <FormNote />
            <AllNotes />
        </div>
    </NoteProvider>
  )
}

export default NotesPage