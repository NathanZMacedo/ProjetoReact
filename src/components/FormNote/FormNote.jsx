import React, { useContext, useState } from "react";
import "./FormNote.css";
import { NoteContext } from "../../context/NoteContext";

function FormNote() { // componente montando o formulario das notas

    const {
        addNote, 
        note, 
        setEditing, 
        isEditing, 
        idEdit, 
        setIdEdit, 
        setNote, 
        editNote
    } = useContext(NoteContext)

    const SendNote = (e) => {
        e.preventDefault();
        if(isEditing) {
            editNote(idEdit);
        } else {
            addNote(note.title, note.description)
        }
        setEditing(false);
        setIdEdit("");
        setNote({title: "", description: ""});
    }

    return (
        <div className="aside-notes">
            <form id="formNote" onSubmit={SendNote}>
                <label htmlFor="titleNote" className="margin-form">{" "} Título </label>
                <input
                    type="text"
                    className="margin-form"
                    value={setNote.title}
                    onChange={(e) =>
                        setNote({ ...note, title: e.target.value })
                    }
                    id="titleNote"
                    placeholder="Título"
                />
                <label htmlFor="descriptionNote" className="margin-form">{" "} Descrição </label>
                <input
                    type="text"
                    className="margin-form"
                    value={setNote.description}
                    onChange={(e) =>
                        setNote({ ...note, description: e.target.value })
                    }
                    id="descriptionNote"
                    placeholder="Descrição"
                />
                <button type="submit" id="buttonForm" className="margin-form" > Salvar Anotação </button>
            </form>
        </div>
    );
}

export default FormNote;	

