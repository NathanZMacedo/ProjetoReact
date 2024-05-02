import React, { createContext, useState } from "react";
import { mockNotes } from "../mookData/mockNotes";
import { generateAtualDate } from "../helpers/generateAtualDate";
import { generateRandomId } from "../helpers/generateRandomId";


const NoteContext = createContext(); //Criaando a loja

const NoteProvider = ({ children }) => { // vamos criar nossas funções que seram usadas por outros componentes
    const [notes, setNotes] = useState([...mockNotes]); // vamos usar a lista que jaja vamos criar

    const [note,setNote]= useState({title:"", description: ""})
    const [isEditing, setEditing] = useState(false)
    const [idEdit, setIdEdit] = useState("")

    const addNote = (description, title) => {
        setNotes([
            ...notes,
            { id: generateRandomId(), description, title, date: generateAtualDate() },
        ]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const editNote = (id) => {
        setNote(notes.map((n) => {
            if(n.id === id) {
                return {...notes,id:id,date:generateAtualDate()};
            } else {
                return n;
            }
        }))
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, note, setNote, isEditing, setEditing, idEdit, setIdEdit, editNote }}>
            {children} 
        </NoteContext.Provider>
    );
};

export { NoteProvider, NoteContext };