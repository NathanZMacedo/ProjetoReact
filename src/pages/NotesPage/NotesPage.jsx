import React from 'react'
import FormNote from '../../components/FormNote/FormNote.jsx'
import AllNotes from '../../components/AllNotes/AllNotes.jsx'
import { NoteProvider } from '../../context/NoteContext.jsx'
import './NotesPage.css'


function NotesPage() {
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